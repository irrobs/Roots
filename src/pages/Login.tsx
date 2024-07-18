import styled from "styled-components";
import LoginForm from "../features/authentication/Login/LoginForm";
import Footer from "../ui/Footer";
import SignUp from "../features/authentication/SignUp/SignUp";
import ResetPassword from "../features/authentication/Reset/ResetPasswordRedirect";
import { device } from "../styles/breakpoints";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: space-around;
`;

const StyledContainer = styled.div`
  width: 30vw;
  margin: auto;

  @media ${device.laptop} {
    width: 40vw;
  }

  @media ${device.phone} {
    width: 60vw;
  }

  @media ${device.smallPhone} {
    width: 80vw;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Login() {
  return (
    <StyledPageContainer>
      <StyledContainer>
        <LoginForm />
        <ActionsContainer>
          <ResetPassword />
          <SignUp />
        </ActionsContainer>
      </StyledContainer>

      <Footer />
    </StyledPageContainer>
  );
}
