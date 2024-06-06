import styled from "styled-components";
import Button from "../../ui/Button";
import SignUp from "./SignUp";

const StyledForgetAndCreateContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function ForgetAndCreate() {
  return (
    <StyledForgetAndCreateContainer>
      <Button variation="secondary">Esqueceu a senha?</Button>
      <SignUp />
    </StyledForgetAndCreateContainer>
  );
}
