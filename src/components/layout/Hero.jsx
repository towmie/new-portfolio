import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import WavyBackground from "../ui/WavyBackground";
import { Asterisk } from "../ui/Asterisk";
import { OrbitControls } from "@react-three/drei";

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
  return (
    <StyledHero>
      <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
        <OrbitControls />
        <WavyBackground />
        <Asterisk scale={0.25} />
      </Canvas>
    </StyledHero>
  );
}

export default Hero;
