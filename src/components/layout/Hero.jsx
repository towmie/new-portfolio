import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import WavyBackground from "../ui/WavyBackground";
import HeroContainer from "../ui/HeroContainer";
import { Container } from "../Container";

const StyledHero = styled.div`
  height: 100vh;
  max-height: calc(100vh + 100px);
  height: 100%;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 100;
    background: linear-gradient(to top, #fff, transparent);
  }
`;

const CanvasWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  position: relative;

  & canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 0;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <HeroContainer />
      {/* <CanvasWrapper> */}
      <Canvas camera={{ position: [0, 0, 1], fov: 45 }} color="black">
        <WavyBackground />
      </Canvas>
      {/* </CanvasWrapper> */}
    </StyledHero>
  );
}

export default Hero;
