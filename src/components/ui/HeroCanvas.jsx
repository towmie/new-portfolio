import { Canvas } from "@react-three/fiber";
import { Sculpture } from "./Sculpture";
import styled from "styled-components";
import Loader from "./Loader";
import { Suspense } from "react";

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

function HeroCanvas() {
  return (
    <StyledCanvas>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <directionalLight
          position={[10, 10, 10]}
          intensity={14}
          color={"white"}
        />
        <group>
          <Suspense fallback={null}>
            <Sculpture />
          </Suspense>
        </group>
      </Canvas>
      <Loader />
    </StyledCanvas>
  );
}

export default HeroCanvas;
