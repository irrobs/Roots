import styled from "styled-components";

type VariationType = "header";

type LogoProps = {
  variation?: VariationType;
};

const StyledLogo = styled.div<{ variation?: VariationType }>`
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

  ${(props) => (props.variation === "header" ? "" : "flex-direction: column")}
`;

export default function Logo({ variation }: LogoProps) {
  return (
    <StyledLogo variation={variation}>
      <img src="/logo.png" alt="Desenho de uma árvore" />
      <p>Roots</p>
    </StyledLogo>
  );
}
