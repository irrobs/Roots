import styled from "styled-components";
import UserBio from "../ui/UserBio";
import UserContent from "../ui/UserContent";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 90%;
  margin: 2rem auto;
`;

export default function UserPage() {
  return (
    <PageContainer>
      <UserBio />
      <UserContent />
    </PageContainer>
  );
}
