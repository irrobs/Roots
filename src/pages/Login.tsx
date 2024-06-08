import styled from "styled-components";
import LoginForm from "../features/authentication/Login/LoginForm";
import Footer from "../ui/Footer";
import SignUp from "../features/authentication/SignUp/SignUp";
import ResetPassword from "../features/authentication/Reset/ResetPasswordRedirect";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

const StyledContainer = styled.div`
  width: 20vw;
  margin: 20vh auto 0;
`;

const ActionsContainer=styled.div`
display: flex;
gap: 1rem;
`;

export default function Login() {
  return (
    <StyledPageContainer>
      <StyledContainer>
        <LoginForm />
        <ActionsContainer>
          <ResetPassword/>
          <SignUp />
        </ActionsContainer>
      </StyledContainer>

      <Footer />
    </StyledPageContainer>
  );
}
