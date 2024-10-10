import styled from "styled-components";
import HeroContainer from "../ui/HeroContainer";
import HeroCanvas from "../ui/HeroCanvas";

const StyledHero = styled.div`
  height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

function Hero() {
  return (
    <StyledHero>
      <HeroCanvas />
      <HeroContainer />
    </StyledHero>
  );
}

export default Hero;
