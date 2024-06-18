import styled from "styled-components";
import UserBio from "../ui/UserBio";

const PageContainer = styled.div`
  grid-column: 1 / -1;
`;

export default function UserPage() {
  return (
    <PageContainer>
      <UserBio />
    </PageContainer>
  );
}
