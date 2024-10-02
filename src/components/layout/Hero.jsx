import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import WavyBackground from "../ui/WavyBackground";

const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Hero() {
  return (
    <StyledHero>
      <Canvas camera={{ position: [0, 0, 0.1], fov: 45 }}>
        <WavyBackground />
      </Canvas>
    </StyledHero>
  );
}

export default Hero;
