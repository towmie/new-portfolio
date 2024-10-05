import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import WavyBackground from "../ui/WavyBackground";
import HeroContainer from "../ui/HeroContainer";

const StyledHero = styled.div`
  height: 100vh;
  max-height: 100vh;
  padding: 40px 60px;
  background-color: black;
  background-image: url("/img/grid.png");
  background-size: 110px 110px;
  background-repeat: repeat;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    mix-blend-mode: darken;
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
      <CanvasWrapper>
        <Canvas camera={{ position: [0, 0, 1], fov: 45 }} color="black">
          <WavyBackground />
        </Canvas>
      </CanvasWrapper>
    </StyledHero>
  );
}

export default Hero;
