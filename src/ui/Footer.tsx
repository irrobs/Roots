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

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#">Sobre</StyledLink>

      <span>@2024 copyright - fasdfsafd</span>
    </StyledFooter>
  );
}
