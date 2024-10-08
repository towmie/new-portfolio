import styled from "styled-components";
import SocialLinks from "./SocialLinks";
const ContentContainer = styled.div`
  padding: 40px 60px;
  position: relative;
  background-color: #fff;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 20vw;
  text-transform: uppercase;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: #000;
  line-height: 1;
  border-bottom: 3px solid #000;
  display: inline-block;
  padding-bottom: 24px;
`;

const SubText = styled.p`
  display: block;
  margin-top: 24px;
  margin-bottom: 0;
  font-size: 32px;
  color: #000;
  font-family: "Oswald", sans-serif;
`;

function FooterContent() {
  return (
    <>
      <ContentContainer>
        <StyledTitle>Contact</StyledTitle>
        <SubText>Let&apos;s Create Something Amazing Together</SubText>
      </ContentContainer>
      <SocialLinks />
    </>
  );
}

export default FooterContent;
