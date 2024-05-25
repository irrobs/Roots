import styled from "styled-components";
import LoginForm from "./LoginForm";
import ForgetAndCreate from "./ForgetAndCreate";

const StyledContainer = styled.div`
  max-width: 20vw;
  margin: 20vh auto;
`;

export default function LoginPage() {
  return (
    <StyledContainer>
      <LoginForm />

      <ForgetAndCreate />
    </StyledContainer>
  );
}
