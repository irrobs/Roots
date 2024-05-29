import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import ForgetAndCreate from "../features/authentication/ForgetAndCreate";
import Footer from "../ui/Footer";

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

export default function Login() {
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
