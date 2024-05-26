import styled from "styled-components";
import LoginForm from "./LoginForm";
import ForgetAndCreate from "./ForgetAndCreate";
import Footer from "./Footer";

const StyledContainer = styled.div`
  width: 20vw;
  margin: 20vh auto 0;
`;

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

export default function LoginPage() {
  return (
    <StyledPageContainer>
      <StyledContainer>
        <LoginForm />
        <ForgetAndCreate />
      </StyledContainer>

      <Footer />
    </StyledPageContainer>
  );
}
