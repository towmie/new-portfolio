import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 800px;
  background-color: #000;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const StyledFooterWrapper = styled.div`
  position: relative;
  height: calc(100vh + 800px);
  top: -100vh;
`;

const FooterWrapper = styled.div`
  position: sticky;
  top: calc(100vh - 800px);
  height: 800px;
  /* padding: 40px 60px; */

  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 20vw;
  text-transform: uppercase;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: #fff;
  line-height: 1;
  /* color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(/img/noise.svg);
  filter: contrast(100%) brightness(10020%); */
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <FooterWrapper>
          <StyledTitle>Contact</StyledTitle>
        </FooterWrapper>
      </StyledFooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
