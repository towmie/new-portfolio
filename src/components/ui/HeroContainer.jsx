import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledHeroContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  z-index: 100;
`;

const Intro = styled.div`
  font-size: 32px;
  font-weight: 300;
  color: #000;
`;

const HeroTitle = styled.div`
  position: relative;
  & h1 {
    color: #000;
    display: inline-flex;
    margin: 0;
    font-size: 10vw;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    font-style: italic;
  }

  & span {
    text-transform: uppercase;
  }
`;

const SubText = styled.span`
  opacity: 0;
  position: absolute;
  bottom: -30px;
  right: -35px;
  font-size: 72px;
  font-weight: 300;
  color: red;
  font-family: "Permanent Marker", cursive;
`;

const CVButton = styled.a`
  margin-top: 4rem;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
`;

function HeroContainer() {
  const lettersRef = useRef();
  const devTextRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.fromTo(
      lettersRef.current.children,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.06,
      }
    ).to(devTextRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "back.inOut",
    });
  });

  return (
    <StyledHeroContainer>
      <Intro>Hi, I&apos;m Andrei👋</Intro>
      <HeroTitle>
        <h1 ref={lettersRef}>
          {["c", "r", "e", "a", "t", "i", "v", "e"].map((char, index) => (
            <span key={index} className="letter">
              {char}
            </span>
          ))}
        </h1>
        <SubText ref={devTextRef}>dev</SubText>
      </HeroTitle>
      <CVButton>Download CV</CVButton>
    </StyledHeroContainer>
  );
}

export default HeroContainer;
