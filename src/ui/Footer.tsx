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

export default function Footer() {
  return (
    <StyledFooter>
      <span>@2024 - Matheus Escobar</span>
    </StyledFooter>
  );
}
