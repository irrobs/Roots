import styled, { css } from "styled-components";

const StyledLogo = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.type === "login" &&
    css`
      flex-direction: column;
    `}

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

export default function Logo({ type }) {
  return (
    <StyledLogo type={type}>
      <img src="/logo.png" alt="Desenho de uma árvore" />
      <p>Roots</p>
    </StyledLogo>
  );
}
