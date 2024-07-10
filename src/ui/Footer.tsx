import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-lime-200);
  width: 100vw;
  padding: 1rem 0;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  color: var(--color-gray-500);
`;
const StyledLink = styled.a`
  color: var(--color-gray-500);
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#">Sobre</StyledLink>

      <SelectContainer>
        <label htmlFor="language-select">Idiomas:</label>
      </SelectContainer>

      <span>@2024 copyright - fasdfsafd</span>
    </StyledFooter>
  );
}
