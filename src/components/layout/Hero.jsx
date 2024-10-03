import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import WavyBackground from "../ui/WavyBackground";
import { Asterisk } from "../ui/Asterisk";
import { OrbitControls, Text } from "@react-three/drei";
import { useControls } from "leva";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CreativeText from "../ui/CreativeTExt";

const StyledHero = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function Hero() {
  const textGroupRef = useRef();
  const { position } = useControls("asterisk", {
    position: {
      value: { x: -0.45, y: 0.08 },
      step: 0.01,
      joystick: "invertY",
    },
  });

  const textRef = useRef([]);

  // Add each letter as a ref
  const addTextRef = (el, index) => {
    if (el && !textRef.current[index]) {
      textRef.current[index] = el;
    }
  };

  // useEffect(() => {
  //   console.log(textRef.current.children);
  // }, []);

  useLayoutEffect(() => {
    if (!textGroupRef.current) return;
    // GSAP staggered animation
    if (textGroupRef.current) console.log(textGroupRef.current);
    console.log(textGroupRef);
    gsap.fromTo(
      textRef.current,
      { scale: 0 }, // Starting scale (zero, making it "pop-up")
      {
        scale: 1, // Target scale (normal size)
        duration: 1, // Duration of each animation
        ease: "back.out(1.7)", // Animation easing for "pop" effect
        stagger: 0.1, // Stagger delay between letters
      }
    );
  }, []);

  return (
    <StyledHero>
      <Canvas
        // orthographic
        camera={{ position: [0, 0, 1], fov: 45 }}
        color="black"
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight intensity={0.5} position={[0, 10, 0]} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />

          <WavyBackground />
          {/* <group position={[-2, 0, 0]} ref={textGroupRef}>
            {"creative".split("").map((char, index) => (
              <Text
                key={index}
                ref={(el) => addTextRef(el, index)}
                fontSize={0.5}
                position={[index * 0.3 - 0.5, 0, 0]} // Adjust letter spacing
                color={"black"}
              >
                {char}
              </Text>
            ))}
          </group> */}

          <Asterisk
            rotation={[0, 0.4, 0]}
            scale={0.25}
            position={[position.x, position.y, 0]}
          />
          <CreativeText />
        </Suspense>
      </Canvas>
    </StyledHero>
  );
}

export default Hero;
