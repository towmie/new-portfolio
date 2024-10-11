import { Canvas } from "@react-three/fiber";
import { Sculpture } from "./Sculpture";
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  return (
    <StyledCanvas>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <directionalLight
          position={[10, 10, 10]}
          intensity={14}
          color={"white"}
        />
        <group>
          <Sculpture scale={0.25} />
        </group>
      </Canvas>
    </StyledCanvas>
  );
}

export default HeroCanvas;
