import styled from "styled-components";
import ResetPasswordForm from '../features/authentication/Reset/ResetPasswordForm'
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

export default function ResetPasswordPage() {
  return (
    <StyledPageContainer>
      <StyledContainer>
        <ResetPasswordForm/>
      </StyledContainer>

      <Footer />
    </StyledPageContainer>
  );
}
