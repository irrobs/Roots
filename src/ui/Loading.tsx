import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 4s linear infinite;

  & img {
    width: 6.4rem;
    height: 6.4rem;
  }
`;

export default function Loading() {
  return (
    <StyledLoading role="alert">
      <img src="/logo.png" alt="Desenho de uma árvore" />
    </StyledLoading>
  );
}
