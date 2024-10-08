import styled from "styled-components";
import FooterContent from "../ui/FooterContent";

const StyledFooter = styled.footer`
  width: 100%;
  height: 700px;
  background-color: #000;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const StyledFooterWrapper = styled.div`
  position: relative;
  height: calc(100vh + 700px);
  top: -100vh;
`;

const FooterWrapper = styled.div`
  position: sticky;
  top: calc(100vh - 700px);
  height: 700px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <FooterWrapper>
          <FooterContent />
        </FooterWrapper>
      </StyledFooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
