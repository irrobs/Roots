import styled from "styled-components";
import LoggedUserBio from "../ui/LoggedUserBio";
import LoggedUserContent from "../ui/LoggedUserContent";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  height: calc(100vh - 8rem);
  overflow-y: auto;
`;

export default function LoggedUserPage() {
  return (
    <PageContainer>
      <LoggedUserBio />
      <LoggedUserContent />
    </PageContainer>
  );
}
