import { Canvas } from "@react-three/fiber";
import { Sculpture } from "./Sculpture";
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useLayoutEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StyledCanvas = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  & canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    @media (max-width: 991px) {
      z-index: -1;
    }
  }
`;
const StyledLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  top: 0;
  left: 0;

  & div {
    height: 100%;
    width: 100%;
    background-color: #000;
  }
`;
function Loader() {
  const { progress, active } = useProgress();
  console.log(useProgress());
  const loadRef = useRef();

  useLayoutEffect(() => {
    if (!active) {
      gsap.to(loadRef.current.children, {
        duration: 1,
        height: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [active]);

  return (
    <StyledLoader ref={loadRef}>
      {[...Array(5)].map((_, index) => (
        <div key={index} />
      ))}
    </StyledLoader>
  );
}
function HeroCanvas() {
  return (
    <StyledCanvas>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <directionalLight
            position={[10, 10, 10]}
            intensity={14}
            color={"white"}
          />
          <group>
            <Sculpture />
          </group>
        </Canvas>
        <Loader />
      </Suspense>
    </StyledCanvas>
  );
}

export default HeroCanvas;
