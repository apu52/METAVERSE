import { useState, useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import gsap from "gsap";

import Floor from "./Floor";
import Cube from "./Cube";

const Game = ({ isOver, setIsOver, isMuted }) => {
  const [layers, setLayers] = useState([0]);
  const [prevPosition, setPrevPosition] = useState(0);

  const [boxes, setBoxes] = useState([
    {
      current: {
        position: {
          x: 0,
          y: 0,
        },
      },
    },
  ]);

  const SPEED = 2 * 0.96 ** layers.length;

  const HIGHSCORE = localStorage.getItem("stackr-highscore") || 0;

  const brick = new Audio("../img/thud.wav");
  const falling = new Audio("../img/falling.wav");
  const thud = (t) => t.play();

  const currentBox = useRef(null);
  const camera = useRef(null);
  const target = useRef(null);

  let currentCameraY = [1];

  let directionX = layers[layers.length - 1] % 2;

  useEffect(() => {
    document.querySelector(".hi").textContent = HIGHSCORE;
  }, [isOver]);

  useEffect(() => {
    const currentAnimation = gsap.fromTo(
      currentBox.current.position,
      {
        x: directionX ? -10 : 10,
      },
      {
        duration: SPEED,
        x: directionX ? 10 : -10,
      }
    );
    currentAnimation.play();

    const boxTime = setTimeout(() => {
      !isMuted && setTimeout(() => thud(falling), 300);
      setIsOver(true);

      if (layers.length - 1 > HIGHSCORE) {
        let newScore = layers.length - 1;
        localStorage.setItem("stackr-highscore", newScore.toString());
      }

      gsap.to(camera.current.position, {
        duration: 2,
        y: 1,
      });
      gsap.to(target.current.target, {
        duration: 2,
        y: 0,
      });
      window.onkeydown = (e) => {
        if (e.keyCode == 32) {
          setLayers([0]);
          setPrevPosition(0);
          setIsOver(false);

          setBoxes([
            {
              current: {
                position: {
                  x: 0,
                  y: 0,
                },
              },
            },
          ]);
        }
      };
    }, SPEED * 1000);

    window.onkeydown = (e) => {
      if (e.keyCode == 32) {
        currentAnimation.pause();
        clearTimeout(boxTime);

        if (
          !currentBox ||
          currentBox?.current?.position?.x > prevPosition + 3 ||
          currentBox?.current?.position?.x < prevPosition - 3
        ) {
          !isMuted && setTimeout(() => thud(falling), 300);
          setIsOver(true);

          if (layers.length - 1 > HIGHSCORE) {
            let newScore = layers.length - 1;
            localStorage.setItem("stackr-highscore", newScore.toString());
          }

          gsap.to(camera.current.position, {
            duration: 2,
            y: 1,
          });
          gsap.to(target.current.target, {
            duration: 2,
            y: 0,
          });
          window.onkeydown = (e) => {
            if (e.keyCode == 32) {
              setLayers([0]);
              setPrevPosition(0);
              setIsOver(false);

              setBoxes([
                {
                  current: {
                    position: {
                      x: 0,
                      y: 0,
                    },
                  },
                },
              ]);
            }
          };
        } else if (currentBox) {
          clearTimeout(boxTime);
          !isMuted && thud(brick);
          setBoxes((prev) => {
            let temp = { ...currentBox };
            return [...prev, temp];
          });
          setPrevPosition(currentBox.current.position.x);

          setTimeout(
            () => setLayers((prev) => [...prev, prev[prev.length - 1] + 1]),
            300
          );
        }
      }
    };
    gsap.fromTo(
      camera.current.position,
      { y: (1.5 + layers[layers.length - 1]) * 1.3 },
      {
        duration: 0.5,
        y: (2.5 + layers[layers.length - 1]) * 1.3,
      }
    );

    gsap.fromTo(
      target.current.target,
      { y: layers[layers.length - 1] - 1 },
      {
        duration: 0.5,
        y: layers[layers.length - 1],
      }
    );

    currentCameraY.push((2.5 + layers[layers.length - 1]) * 1.3);
    document.querySelector(".sc").textContent = layers.length - 1;
  }, [layers]);

  return (
    <>
      {/* <primitive object={new THREE.AxesHelper(10)} /> */}
      <PerspectiveCamera
        makeDefault
        position={[11, currentCameraY[currentCameraY.length - 1] || 1, 10]}
        ref={camera}
      />
      <OrbitControls
        ref={target}
        target={[1, layers[layers.length - 1], 1]}
        enableDamping
        dampingFactor={0.5}
        autoRotate
        autoRotateSpeed={4}
      />

      {!isOver &&
        layers.map((l) => (
          <mesh
            position={[0, l + 1, 0]}
            ref={currentBox}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[3, 1, 3]} />
            <meshLambertMaterial
              color={`hsl(${l * 9 + 100}, 100%, 70%)`}
              metalness={0.8}
              roughness={0.6}
            />
          </mesh>
        ))}
      {!isOver && (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 1, 3]} />
          <meshLambertMaterial
            color={`hsl(${0 * 9 + 100}, 100%, 70%)`}
            metalness={0.8}
            roughness={0.6}
          />
        </mesh>
      )}

      <directionalLight
        args={["#ffffff", 0.6]}
        position={[0, 10, 20]}
        castShadow
      />

      <ambientLight args={["#ffffff", 0.2]} />

      <Physics
        iterations={30}
        tolerance={1}
        gravity={[0, -40, 0]}
        defaultContactMaterial={{
          friction: 0.9,
          restitution: 1.4,
          contactEquationStiffness: 1e7,
          contactEquationRelaxation: 1,
          frictionEquationStiffness: 1e7,
          frictionEquationRelaxation: 2,
        }}
      >
        {isOver &&
          boxes.map((b, i) => (
            <Cube
              position={[b.current.position.x, b.current.position.y, 0]}
              i={i - 1}
            />
          ))}
        <Floor position={[0, -0.5, 0]} h={layers.length} />
      </Physics>

      <Environment background files={"img.hdr"} path={"/img/"} ground />
    </>
  );
};

export default Game;
