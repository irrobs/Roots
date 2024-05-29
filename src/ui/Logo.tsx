import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 6rem;
  }

  & > p {
    text-transform: uppercase;
    color: var(--color-lime-700);
    font-weight: bold;
    font-size: 3.6rem;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.png" alt="Desenho de uma árvore" />
      <p>Roots</p>
    </StyledLogo>
  );
}
