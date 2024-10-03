import { useGSAP } from "@gsap/react";
import { Mask, Text, useMask } from "@react-three/drei";
import gsap from "gsap";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

function CreativeText() {
  const textGroupRef = useRef();
  const { textPosition, color } = useControls({
    textPosition: {
      value: { x: -1.32, y: 0.45, z: -0.92 },
      min: -5,
      max: 5,
      step: 0.01,
    },
    color: "#ff2f00",
  });

  useGSAP(() => {
    if (!textGroupRef.current) return;
    textGroupRef.current.children.forEach((child, index) => {
      gsap.from(child.position, {
        y: -10,
        duration: 1,
        delay: index * 0.1,
        // ease: CustomEase.create(
        //   "custom",
        //   "M0,0 C0.29,0 0.294,0.018 0.365,0.103 0.434,0.186 0.466,0.362 0.498,0.502 0.518,0.592 0.563,0.847 0.664,0.975 0.801,1.148 0.857,1.106 1,1 "
        // ),
        ease: "expo.inOut",
        stagger: 0.1,
      });
    });
  });

  return (
    <group
      position={[textPosition.x, textPosition.y, textPosition.z]}
      ref={textGroupRef}
    >
      {"CREATIVE".split("").map((char, index) => (
        <Text
          key={index}
          fontSize={0.5}
          fontWeight={900}
          position={[
            index === 3 || index === 4 ? index * 0.23 : index * 0.22,
            0,
            0,
          ]}
        >
          {char}
          <meshBasicMaterial color={color} />
        </Text>
      ))}
    </group>
  );
}

export default CreativeText;
