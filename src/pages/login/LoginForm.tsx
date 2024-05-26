import { IoEyeOutline } from "react-icons/io5";

import LoginLogo from "./LoginLogo";
import {
  StyledFormContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledSpan,
  StyledCheckboxContainer,
  StyledCheckbox,
  StyledButton,
  StyledLabel,
} from "./StyledComponents";

export default function loginForm() {
  return (
    <StyledFormContainer>
      <LoginLogo />

      <StyledForm action="get">
        <StyledInput type="email" placeholder="Digite seu email" />

        <StyledInputContainer>
          <StyledInput type="password" placeholder="Digite sua senha" />

          <StyledSpan>
            <IoEyeOutline />
          </StyledSpan>
        </StyledInputContainer>

        <StyledCheckboxContainer>
          <StyledCheckbox type="checkbox" id="checkbox-remember" />
          <StyledLabel htmlFor="checkbox-remember">Lembre de mim</StyledLabel>
        </StyledCheckboxContainer>

        <StyledButton primary={true}>Entrar</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
