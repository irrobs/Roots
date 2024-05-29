import { IoEyeOutline } from "react-icons/io5";
import Logo from "../../ui/Logo";

import styled from "styled-components";
import TextInput from "../../ui/TextInput";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";

const StyledFormContainer = styled.div`
  background-color: var(--color-lime-200);
  padding: 2rem 4rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-md);
`;

const StyledForm = styled.form`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledSpan = styled.span`
  display: inline-block;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  & > * {
    width: 100%;
    height: 100%;
    stroke: var(--color-gray-600);
  }
`;

export default function LoginForm() {
  return (
    <StyledFormContainer>
      <Logo type="login" />

      <StyledForm action="get">
        <TextInput type="email" placeholder="Digite seu email" />

        <StyledInputContainer>
          <TextInput type="password" placeholder="Digite sua senha" />

          <StyledSpan>
            <IoEyeOutline />
          </StyledSpan>
        </StyledInputContainer>

        <Checkbox />

        <Button category="primary">Entrar</Button>
      </StyledForm>
    </StyledFormContainer>
  );
}
