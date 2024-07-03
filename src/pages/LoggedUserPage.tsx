import styled from "styled-components";
import LoggedUserBio from "../ui/LoggedUserBio";
import UserContent from "../ui/UserContent";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 90%;
  margin: 2rem auto;
`;

export default function LoggedUserPage() {
  return (
    <PageContainer>
      <LoggedUserBio />
      <UserContent />
    </PageContainer>
  );
}
