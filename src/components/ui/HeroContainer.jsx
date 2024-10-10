import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledHeroContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0 60px 40px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 24px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & h1 {
    font-size: 12vw;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
  }
  p {
    font-size: 36px;
    max-width: 600px;
  }
`;

function HeroContainer() {
  const firstRowRef = useRef();
  const secondRowRef = useRef();
  const thirdRowRef = useRef();
  const containerRef = useRef();

  return (
    <>
      <StyledHeroContainer ref={containerRef}>
        <FirstRow ref={firstRowRef}>
          <p>Hi, I&apos;m Andrei Ziuzin</p>
          <h1>Crafting</h1>
        </FirstRow>
        <FirstRow ref={secondRowRef}>
          <h1>Immersive</h1>
          <p>
            I&apos;m a creative developer focused on delivering stunning,
            interactive, and 3D-powered web experiences
          </p>
        </FirstRow>
        <FirstRow ref={thirdRowRef}>
          <p></p>
          <h1 style={{ zIndex: 999 }}>Web Experiences</h1>
        </FirstRow>
      </StyledHeroContainer>
    </>
  );
}

export default HeroContainer;
