import styled from "styled-components";

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 8rem;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  color: var(--color-lime-700);
  font-weight: bold;
  font-size: 3.6rem;
`;

export default function LoginLogo() {
  return (
    <StyledLogoContainer>
      <StyledLogo src="/logo.png" alt="Desenho de uma árvore" />
      <StyledTitle>Roots</StyledTitle>
    </StyledLogoContainer>
  );
}
