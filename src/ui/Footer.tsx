import { StyledFooter, StyledLink, StyledSelect } from "./StyledComponents";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#">Sobre</StyledLink>

      <div>
        <label htmlFor="language-select">Idiomas:</label>
        <StyledSelect id="language-select">
          <option value="1">Português</option>
          <option value="2">Inglês</option>
          <option value="3">Espanhol</option>
        </StyledSelect>
      </div>

      <span>@2024 copyright - fasdfsafd</span>
    </StyledFooter>
  );
}
