import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const ContentContainer = styled.div`
  padding: 40px 60px;
  position: relative;
  background-color: #fff;

  @media (max-width: 991px) {
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const StyledTitle = styled.div`
  border-bottom: 3px solid #000;
  padding-bottom: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h2 {
    display: inline-block;
    margin: 0;
    font-size: 20vw;
    text-transform: uppercase;
    font-weight: 900;
    font-family: "Oswald", sans-serif;
    color: #000;
    line-height: 1;
    letter-spacing: -0.05em;
    z-index: 1;
    cursor: default;

    & span {
      color: red;
    }
  }
`;

const SubText = styled.p`
  display: block;
  margin-top: 24px;
  margin-bottom: 0;
  font-size: 32px;
  color: #000;
  font-family: "Oswald", sans-serif;
  cursor: default;

  & a {
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: #000;
    transition: all 0.2s linear;

    &::after {
      content: "";
      position: absolute;
      height: 3px;
      background-color: red;
      bottom: -2px;
      left: 0;
      right: 0;
      transition: all 0.2s linear;
    }
    &:hover {
      &::after {
        left: 100%;
      }
    }
  }

  @media (max-width: 991px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

function FooterContent() {
  return (
    <>
      <ContentContainer>
        <StyledTitle>
          <h2>
            Contact<span>*</span>
          </h2>
        </StyledTitle>
        <SubText>
          Let&apos;s Create Something Amazing Together.{" "}
          <a target="_blank" href="/img/cv.pdf">
            Download CV
          </a>
        </SubText>
      </ContentContainer>
      <SocialLinks />
    </>
  );
}

export default FooterContent;
