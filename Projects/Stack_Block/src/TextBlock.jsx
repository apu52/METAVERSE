import React, { useRef } from "react";
import gsap from "gsap";
import { Text } from "@react-three/drei";
import { useEffect } from "react";

const TextBlock = ({ step }) => {
  const welcome = useRef(null);
  useEffect(() => {
    if (welcome) {
      if (step === 1) {
        setTimeout(() => {
          gsap.from(welcome.current.position, {
            y: 20,
            z: -90,
            duration: 1,
            ease: "power4",
          });

          gsap.to(welcome.current, {
            strokeOpacity: 1,
            fillOpacity: 1,
            outlineOpacity: 1,
            duration: 1,
          });
        }, 3000);
      }
      if (step === 2) {
        let tl = gsap.timeline();
        tl.to(welcome.current.position, {
          x: -100,
          duration: 1,
          ease: "power2",
        })
          .to(welcome.current, {
            text: `Use <<<Space>>>
          to drop a block
          on top of the tower`,
            duration: 0.1,
          })
          .to(welcome.current, {
            strokeOpacity: 1,
            fillOpacity: 1,
            outlineOpacity: 1,
            duration: 1.4,
            ease: "power2",
          })
          .to(
            welcome.current.position,
            {
              x: -25,
              z: -75,
              duration: 1,
            },
            "-=1"
          );
      }
      if (step === 3) {
        let tl = gsap.timeline();
        tl.to(welcome.current, {
          strokeOpacity: 0,
          fillOpacity: 0,
          outlineOpacity: 0,
          duration: 0.1,
        })
          .to(welcome.current, {
            text: `Press M to mute`,
            duration: 0.1,
          })
          .to(
            welcome.current.position,
            {
              x: 2,
              y: 5,
              z: -20,
              duration: 0.1,
            },
            "-=1"
          )
          .to(welcome.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
          })
          .to(welcome.current, {
            strokeOpacity: 1,
            fillOpacity: 1,
            outlineOpacity: 1,
            duration: 0.5,
          });
      }
    }
  }, [welcome, step]);
  return (
    <>
      <Text
        ref={welcome}
        rotation={[0.1, 5, 0]}
        position={[-25, 15, -80]}
        color="#171717"
        fontSize={4}
        maxWidth={60}
        lineHeight={1}
        letterSpacing={0.1}
        textAlign="center"
        text={`Welcome 
        to 
        STACKR!`}
        font="../img/font.woff"
        anchorX={-30}
        anchorY="100%"
        outlineColor={"#dff"}
        outlineOpacity={0}
        outlineWidth={0.5}
        outlineBlur="20%"
        strokeOpacity={0}
        fillOpacity={0}
        curveRadius={0}
      ></Text>
    </>
  );
};

export default TextBlock;
