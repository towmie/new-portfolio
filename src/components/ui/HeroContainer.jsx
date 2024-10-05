import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

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
    font-weight: 800;
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
  color: red;
  font-family: "Permanent Marker", cursive;
`;

const Divider = styled.div`
  width: 1px;
  height: 0;
  background-color: #555555;
`;

const CVButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid #555555;
  font-size: 18px;
  color: #000;
  font-weight: 300;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
`;

function HeroContainer() {
  const lettersRef = useRef();
  const devTextRef = useRef();
  const arrowRef = useRef();
  const dividerRef = useRef();
  const buttonRef = useRef();
  const tl = gsap.timeline({
    delay: 1,
  });
  const hoverTL = gsap.timeline({ ease: "back.out(1.7)", duration: 0.5 });
  hoverTL.pause();

  function onMounseIn() {
    hoverTL.play();
  }

  function onMouseOut() {
    hoverTL.reverse();
  }
  useGSAP(() => {
    hoverTL.to(arrowRef.current, { width: "50px" });

    tl.fromTo(
      lettersRef.current.children,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: "back.inOut(1.7)",
        stagger: 0.06,
      }
    )
      .to(
        devTextRef.current,
        {
          opacity: 1,
          duration: 0.2,
          ease: "back.inOut",
        },
        "-=0.2"
      )
      .to(dividerRef.current, {
        height: "100px",
        opacity: 1,
        duration: 0.7,
        ease: "power2.inOut",
      })
      .fromTo(
        buttonRef.current,
        { y: -30 },
        { y: 0, opacity: 1, ease: "back.inOut(2.5)" },
        "-=0.5"
      );
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
      <Divider ref={dividerRef} />
      <CVButton
        ref={buttonRef}
        onMouseEnter={onMounseIn}
        onMouseLeave={onMouseOut}
        href="https://google.com"
      >
        Download CV
        <IoIosArrowRoundForward ref={arrowRef} />
      </CVButton>
    </StyledHeroContainer>
  );
}

export default HeroContainer;
