import { Canvas, useFrame } from "@react-three/fiber";
import { Sculpture } from "./Sculpture";
// import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const StyledCanvas = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  & canvas {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

function HeroCanvas() {
  const modelRef = useRef();
  const containerRef = useRef();
  //   const scroll = useScroll();
  //   const tl = useRef();

  //   useFrame(() => {
  //     tl.current.seek(scroll.offset * tl.current.duration());
  //   });

  useGSAP(() => {
    if (!modelRef.current || !containerRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      modelRef.current.rotation,
      {
        duration: 2,
        x: 0,
        y: -Math.PI * 2,
        z: 0,
      },
      {
        duration: 2,
        x: 0,
        y: Math.PI / 2,
        z: 0,
      }
    );
  });

  return (
    <StyledCanvas ref={containerRef}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <directionalLight
          position={[10, 10, 10]}
          intensity={14}
          color={"white"}
        />
        <group ref={modelRef}>
          <Sculpture scale={0.25} />
        </group>
      </Canvas>
    </StyledCanvas>
  );
}

export default HeroCanvas;
