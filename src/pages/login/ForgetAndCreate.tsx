import styled from "styled-components";
import { StyledButton } from "./StyledComponents";

const StyledForgetAndCreateContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function ForgetAndCreate() {
  return (
    <StyledForgetAndCreateContainer>
      <StyledButton>Esqueceu a senha?</StyledButton>
      <StyledButton>Cadastre-se</StyledButton>
    </StyledForgetAndCreateContainer>
  );
}
