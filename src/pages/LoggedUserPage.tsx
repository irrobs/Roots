import styled from "styled-components";
import LoggedUserBio from "../ui/LoggedUserBio";
import LoggedUserContent from "../ui/LoggedUserContent";
import { device } from "../styles/breakpoints";

const PageContainer = styled.div`
  grid-column: 1 / -1;

  padding: 2rem 10rem;
  height: calc(100dvh - 8rem);
  overflow-y: scroll;

  @media ${device.smallTablet} {
    padding: 2rem;
  }
`;

export default function LoggedUserPage() {
  return (
    <PageContainer>
      <LoggedUserBio />
      <LoggedUserContent />
    </PageContainer>
  );
}
