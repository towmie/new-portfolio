import styled from "styled-components";

const StyledMask = styled.div`
  position: absolute;
  mask-image: url(/img/mask.svg);
  -webkit-mask-image: url(/img/mask.svg);
  background-color: red;
  color: #fff;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

function Mask() {
  return <StyledMask></StyledMask>;
}

export default Mask;
