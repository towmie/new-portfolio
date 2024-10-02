import styled from "styled-components";
import Menu from "../ui/Menu";

const StyledHeader = styled.header`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.div`
  & img {
    width: 100%;
    height: 50px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <img
          src="/logo-red.png"
          alt="logo. Andrei Ziuzin - Creative developer"
        />
      </Logo>
      <Menu />
    </StyledHeader>
  );
}

export default Header;
