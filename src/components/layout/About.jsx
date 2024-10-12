import styled from "styled-components";
import { skillsFirstArr, skillsSecondArr } from "../../data";
import { Container } from "../Container";
const AboutWrapper = styled.div`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  z-index: 999;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to right, #fff, transparent);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to left, #fff, transparent);
  }

  @media (max-width: 991px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  & ul {
    display: inline-flex;
    gap: 3rem;
    list-style: none;
    margin: 0;
    animation: ${(props) =>
      props.reverse === "true"
        ? "anim1 35s linear infinite"
        : "anim2 35s linear infinite"};

    font-family: "Oswald", sans-serif;

    & li {
      font-size: 5vw;
      font-weight: 700;
      cursor: default;

      @media (max-width: 768px) {
        font-size: 48px;
      }
    }

    & li:nth-child(odd) {
      -webkit-text-stroke: 2px rgba(109, 109, 109, 0.8);
      color: transparent;
    }
  }
`;

function About() {
  return (
    <Container>
      <AboutWrapper>
        <AboutContainer>
          <ul>
            {skillsFirstArr.map((skill, index) => (
              <li key={`first-${index}`}>{skill}</li>
            ))}
          </ul>
          <ul>
            {skillsFirstArr.map((skill, index) => (
              <li key={`first-repeat-${index}`}>{skill}</li>
            ))}
          </ul>
        </AboutContainer>
        <AboutContainer reverse={true.toString()}>
          <ul>
            {skillsSecondArr.map((skill, index) => (
              <li key={`second-${index}`}>{skill}</li>
            ))}
          </ul>
          <ul>
            {skillsSecondArr.map((skill, index) => (
              <li key={`second-repeat-${index}`}>{skill}</li>
            ))}
          </ul>
        </AboutContainer>
      </AboutWrapper>
    </Container>
  );
}

export default About;
