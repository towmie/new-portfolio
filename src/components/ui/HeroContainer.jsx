import styled from "styled-components";

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
    font-size: 10vw;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
  }
  p {
    font-size: 32px;
    max-width: 600px;
  }
`;

function HeroContainer() {
  return (
    <>
      <StyledHeroContainer>
        <FirstRow>
          <p>Hi, I&apos;m Andrei Ziuzin</p>
          <h1>Crafting</h1>
        </FirstRow>
        <FirstRow>
          <h1>Immersive</h1>
          <p>
            I&apos;m a creative developer focused on delivering stunning,
            interactive, and 3D-powered web experiences
          </p>
        </FirstRow>
        <FirstRow>
          <p></p>
          <h1>Web Experiences</h1>
        </FirstRow>
      </StyledHeroContainer>
    </>
  );
}

export default HeroContainer;
