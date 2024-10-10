import { Canvas, useFrame } from "@react-three/fiber";
import { Sculpture } from "./Sculpture";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useRef } from "react";

const StyledCanvas = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  & canvas {
    width: 100%;
    height: 100%;
    z-index: 999;
  }
`;

function HeroCanvas() {
  const modelRef = useRef();

  //   useFrame(() => {
  //     if (modelRef.current) {
  //       modelRef.current.rotation.y += 0.001;
  //     }
  //   });

  return (
    <StyledCanvas>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Sculpture ref={modelRef} scale={0.3} />
      </Canvas>
    </StyledCanvas>
  );
}

export default HeroCanvas;
