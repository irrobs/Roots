import styled from "styled-components";
import UserContent from "../ui/UserContent";
import UserBio from "../ui/UserBio";

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
