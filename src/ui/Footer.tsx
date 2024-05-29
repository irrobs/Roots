import styled from "styled-components";
import Select from "./Select";

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

const options = [
  { value: 1, text: "Português" },
  { value: 2, text: "Inglês" },
  { value: 3, text: "Espanhol" },
];

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#">Sobre</StyledLink>

      <div>
        <label htmlFor="language-select">Idiomas:</label>
        <Select options={options} id="language-select" />
      </div>

      <span>@2024 copyright - fasdfsafd</span>
    </StyledFooter>
  );
}
