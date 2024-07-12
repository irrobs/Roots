import styled from "styled-components";
import LoggedUserBio from "../ui/LoggedUserBio";
import LoggedUserContent from "../ui/LoggedUserContent";

const PageContainer = styled.div`
  grid-column: 1 / -1;

  padding: 2rem 10rem;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
`;

export default function LoggedUserPage() {
  return (
    <PageContainer>
      <LoggedUserBio />
      <LoggedUserContent />
    </PageContainer>
  );
}
