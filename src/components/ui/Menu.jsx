import styled from "styled-components";

const MenuButton = styled.button`
  width: 45px;
  height: 45px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  pointer-events: none;
  z-index: 10;

  & span {
    cursor: pointer;
    width: 50px;
    height: 8px;
    background: var(--color-primary);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  transition: all 0.3s ease-in-out;

  &:hover span {
    transition: all 0.3s ease-in-out;
  }

  &:hover span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  & span:nth-child(1) {
    transform: translate(-50%, -50%);
  }

  & span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  & span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  & span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(135deg);
  }
`;

function Menu() {
  return (
    <>
      <MenuButton>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </>
  );
}

export default Menu;
