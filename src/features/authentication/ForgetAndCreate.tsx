import styled from "styled-components";
import Button from "../../ui/Button";

const StyledForgetAndCreateContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function ForgetAndCreate() {
  return (
    <StyledForgetAndCreateContainer>
      <Button category="secondary">Esqueceu a senha?</Button>
      <Button category="secondary">Cadastre-se</Button>
    </StyledForgetAndCreateContainer>
  );
}
