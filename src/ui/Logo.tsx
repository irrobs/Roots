import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

type VariationType = "header";

type LogoProps = {
  variation?: VariationType;
};

const StyledLogo = styled.div<{ variation?: VariationType }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.variation === "header" &&
    css`
      flex-direction: row;
      @media ${device.smallTablet} {
        display: none;
      }
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

export default function Logo({ variation }: LogoProps) {
  return (
    <StyledLogo variation={variation}>
      <img src="/logo.png" alt="Desenho de uma árvore" />
      <p>Roots</p>
    </StyledLogo>
  );
}
