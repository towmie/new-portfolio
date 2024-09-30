import { Container } from "../ui/Container";
import styled from "styled-components";
import Menu from "../ui/Menu";
const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  & img {
    width: 100%;
    height: 50px;
  }
`;

function Header() {
  return (
    <Container>
      <StyledHeader>
        <Logo>
          <img
            src="/logo-red.png"
            alt="logo. Andrei Ziuzin - Creative developer"
          />
        </Logo>
        <Menu />
      </StyledHeader>
    </Container>
  );
}

export default Header;
