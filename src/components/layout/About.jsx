import styled from "styled-components";

const skillsFirstArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Three.js",
  "GSAP",
  "React Three Fiber",
  "Styled Components",
];
const skillsSecondArr = [
  "Redux",
  "React Query",
  "SCSS, LESS",
  "jQuery",
  "Alpine.js",
  "Git",
  "Tailwind",
  "Bootstrap",
];

const AboutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;

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
      props.reverse
        ? "anim1 35s linear infinite"
        : "anim2 35s linear infinite"};

    font-family: "Oswald", sans-serif;

    & li {
      font-size: 5vw;
      font-weight: 700;
    }

    & li:nth-child(odd) {
      -webkit-text-stroke: 2px rgba(109, 109, 109, 0.8);
      color: transparent;
    }
  }
`;

function About() {
  return (
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
      <AboutContainer reverse={true}>
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
  );
}

export default About;
