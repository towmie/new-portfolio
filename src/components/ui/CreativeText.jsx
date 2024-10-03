import { useGSAP } from "@gsap/react";
import { Mask, Text, useMask } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useControls } from "leva";
import { useRef } from "react";

function CreativeText() {
  const textGroupRef = useRef();
  useGSAP(() => {
    if (!textGroupRef.current) return;
    textGroupRef.current.children.forEach((child, index) => {
      gsap.from(child.position, {
        y: -10,
        duration: 1,
        delay: index * 0.1,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    });
  });
  return (
    <group position={[-1, 0, 0]} ref={textGroupRef}>
      {"creative".split("").map((char, index) => (
        <Text key={index} fontSize={0.5} position={[index * 0.3 - 0.5, 0, 0]}>
          {char}
        </Text>
      ))}
    </group>
  );
}

export default CreativeText;
