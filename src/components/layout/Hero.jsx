import styled from "styled-components";
import { Container } from "../ui/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroModel from "../ui/HeroModel";

const PrimaryHeader = styled.h1`
  font-size: 250px;
  font-weight: 900;
  line-height: 0.8;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`;

const DeveloperText = styled.div`
  margin-top: 32px;
  font-size: 64px;
  font-weight: 900;
  line-height: 0.8;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;

  & span:nth-child(3) {
    color: #fe0000;
  }
`;

const Divider = styled.div`
  width: 0;
  opacity: 0;
  height: 11px;
  margin-right: -6px;
  background-color: red;
`;

const SVGContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

function Hero() {
  useGSAP(() => {
    gsap.to(
      "#divider",
      {
        width: "100%",
        opacity: 1,
        duration: 0.7,
        ease: "power2.inOut",
      },
      "+=1"
    );
  });
  return (
    <Container>
      <PrimaryHeader>Creative</PrimaryHeader>
      <SVGContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="36px"
        >
          <text
            kerning="auto"
            fontFamily="Myriad Pro"
            fill="rgb(0, 0, 0)"
            transform="matrix( 1, 0, 0, 0.19255549159295,0.625, 35.1374387517723)"
            fontSize="250px"
          >
            <tspan
              fontSize="250px"
              fontFamily="Raleway"
              fontWeight="900"
              fill="#d6d5d5"
            >
              CREAT
            </tspan>
            <tspan
              fontSize="250px"
              fontFamily="Raleway"
              fontWeight="900"
              fill="#FE0000"
            >
              I
            </tspan>
            <tspan
              fontSize="250px"
              fontFamily="Raleway"
              fontWeight="900"
              fill="#d6d5d5"
            >
              VE
            </tspan>
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="9px"
        >
          <text
            kerning="auto"
            fontFamily="Myriad Pro"
            fill="rgb(0, 0, 0)"
            transform="matrix( 1, 0, 0, 0.03808671811043,0.625, 7.88971791182792)"
            fontSize="250px"
          >
            <tspan
              fontSize="250px"
              fontWeight={900}
              fontFamily="Raleway"
              fill="#9e9e9e"
            >
              CREATIVE
            </tspan>
          </text>
        </svg>
      </SVGContainer>
      <DeveloperText>
        <span>D</span>
        <Divider id="divider" />
        <span>E</span>
        <span>LOPER</span>
      </DeveloperText>
      <HeroModel />
    </Container>
  );
}

export default Hero;
