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

const Intro = ({ setStart, step }) => {
  const [isPaused, setIsPaused] = useState(true);

  const camera = useRef(null);
  const target = useRef(null);

  useEffect(() => {
    setTimeout(
      () =>
        window.addEventListener(
          "keydown",
          (e) => e.key === " " && setIsPaused(false),
          {
            once: true,
          }
        ),
      6000
    );

    return () =>
      window.removeEventListener(
        "keydown",
        (e) => e.key === " " && setIsPaused(false),
        {
          once: true,
        }
      );
  }, []);

  const boxes = [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 3 },
    { x: 0, y: 0, z: 6 },
    { x: 0, y: 1, z: 6 },
    { x: 0, y: 1, z: 3 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: 2, z: 0 },
    { x: 0, y: 3, z: 0 },
    { x: 0, y: 3, z: 0 },
    { x: 0, y: 3, z: 3 },
    { x: 0, y: 3, z: 6 },
    { x: 0, y: 4, z: 0 },
    { x: 0, y: 4, z: 3 },
    { x: 0, y: 4, z: 6 },
    { x: 0, y: 5, z: 6 },
    { x: 0, y: 6, z: 6 },
    { x: 0, y: 6, z: 3 },
    { x: 0, y: 6, z: 0 },
    { x: 0, y: 7, z: 6 },
    { x: 0, y: 7, z: 3 },
    { x: 0, y: 7, z: 0 },
    // end of S
    { x: 0, y: 0, z: -9 },
    { x: 0, y: 1, z: -9 },
    { x: 0, y: 2, z: -9 },
    { x: 0, y: 3, z: -9 },
    { x: 0, y: 4, z: -9 },
    { x: 0, y: 5, z: -9 },
    { x: 0, y: 6, z: -9 },
    { x: 0, y: 6, z: -6 },
    { x: 0, y: 6, z: -12 },
    { x: 0, y: 7, z: -9 },
    { x: 0, y: 7, z: -6 },
    { x: 0, y: 7, z: -12 },
    //end of T
    { x: 0, y: 0, z: -18 },
    { x: 0, y: 1, z: -18 },
    { x: 0, y: 2, z: -18 },
    { x: 0, y: 3, z: -18 },
    { x: 0, y: 4, z: -18 },
    { x: 0, y: 5, z: -18 },
    { x: 0, y: 6, z: -18 },
    { x: 0, y: 6, z: -21 },
    { x: 0, y: 7, z: -18 },
    { x: 0, y: 7, z: -21 },
    { x: 0, y: 6, z: -24 },
    { x: 0, y: 7, z: -24 },
    { x: 0, y: 0, z: -24 },
    { x: 0, y: 1, z: -24 },
    { x: 0, y: 2, z: -24 },
    { x: 0, y: 3, z: -24 },
    { x: 0, y: 4, z: -24 },
    { x: 0, y: 5, z: -24 },
    { x: 0, y: 3, z: -21 },
    { x: 0, y: 2, z: -21 },
    //end of A
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: -33 },
    { x: 0, y: 0, z: -36 },
    { x: 0, y: 1, z: -30 },
    { x: 0, y: 1, z: -33 },
    { x: 0, y: 1, z: -36 },
    { x: 0, y: 2, z: -30 },
    { x: 0, y: 3, z: -30 },
    { x: 0, y: 4, z: -30 },
    { x: 0, y: 5, z: -30 },
    { x: 0, y: 6, z: -30 },
    { x: 0, y: 6, z: -33 },
    { x: 0, y: 6, z: -36 },
    { x: 0, y: 7, z: -30 },
    { x: 0, y: 7, z: -33 },
    { x: 0, y: 7, z: -36 },
    //end of C
    { x: 0, y: 0, z: -42 },
    { x: 0, y: 1, z: -42 },
    { x: 0, y: 2, z: -42 },
    { x: 0, y: 3, z: -42 },
    { x: 0, y: 4, z: -42 },
    { x: 0, y: 5, z: -42 },
    { x: 0, y: 6, z: -42 },
    { x: 0, y: 7, z: -42 },
    { x: 0, y: 2, z: -45 },
    { x: 0, y: 3, z: -45 },
    { x: 0, y: 4, z: -45 },
    { x: 0, y: 5, z: -45 },
    { x: 0, y: 5, z: -48 },
    { x: 0, y: 6, z: -48 },
    { x: 0, y: 7, z: -48 },
    { x: 0, y: 0, z: -48 },
    { x: 0, y: 1, z: -48 },
    { x: 0, y: 2, z: -48 },
    //end of K
    { x: 0, y: 0, z: -54 },
    { x: 0, y: 1, z: -54 },
    { x: 0, y: 2, z: -54 },
    { x: 0, y: 3, z: -54 },
    { x: 0, y: 4, z: -54 },
    { x: 0, y: 5, z: -54 },
    { x: 0, y: 6, z: -54 },
    { x: 0, y: 6, z: -57 },
    { x: 0, y: 6, z: -60 },
    { x: 0, y: 7, z: -54 },
    { x: 0, y: 7, z: -57 },
    { x: 0, y: 7, z: -60 },
  ];

  useEffect(() => {
    if (camera.current !== null)
      gsap.to(camera.current.position, {
        y: 40,
        x: 60,
        z: 60,
        duration: 2.5,
        ease: "slow",
      });
    gsap.to(camera.current.position, {
      y: 6,
      x: 35,
      z: 40,
      duration: 4.5,
      delay: 0.7,
      ease: "power4",
    });
    setTimeout(() => setStart(true), 6000);
  }, [camera]);

  useEffect(() => {
    if (!isPaused && step < 2) {
      gsap.to(camera.current.position, {
        y: 20,
        x: -40,
        z: -40,
        duration: 1.5,
        delay: 0.7,
        ease: "power4",
      });
      gsap.to(target.current, {
        autoRotate: false,
        duration: 0.1,
      });
      gsap.to(target.current.target, {
        x: 45,
        y: 15,
        duration: 1,
        delay: 0.8,
      });
    }
    step < 2 && setTimeout(() => setIsPaused(true), 2500);
  }, [isPaused]);

  useEffect(() => {
    if (step === 3) {
      gsap.to(camera.current.position, {
        y: 12,
        x: 0,
        z: 0,
        duration: 1,
      });
    }
    if (step === 4) {
      setIsPaused(false);
      gsap.to(camera.current.position, {
        y: 20,
        x: 1,
        z: 20,
        duration: 1,
      });
    }
  }, [step]);

  return (
    <>
      {/* <primitive object={new THREE.AxesHelper(10)} /> */}
      <PerspectiveCamera makeDefault position={[35, 100, 40]} ref={camera} />
      <OrbitControls
        ref={target}
        target={[-10, 0, 0]}
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        autoRotate
        autoRotateSpeed={-0.5}
      />
      <directionalLight
        args={["#ffffff", 0.6]}
        position={[0, 10, 20]}
        castShadow
      />

      <ambientLight args={["#ffffff", 0.2]} />

      <Physics
        isPaused={isPaused}
        iterations={30}
        tolerance={1}
        gravity={[0, -20, 0]}
        defaultContactMaterial={{
          friction: 0.6,
          restitution: 2,
          contactEquationStiffness: 1e7,
          contactEquationRelaxation: 0,
          frictionEquationStiffness: 1e7,
          frictionEquationRelaxation: 2,
        }}
      >
        {boxes.map((b, i) => (
          <Cube position={[b.x, b.y, b.z + 27]} i={i - 1} />
        ))}
        <Floor position={[0, -0.5, 0]} />
      </Physics>

      <Environment background files={"img.hdr"} path={"/img/"} ground />
    </>
  );
};

export default Intro;
