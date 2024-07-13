import styled from "styled-components";
import UserPosts from "./UserPosts";

const StyledUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LoggedUserContent() {
  return (
    <StyledUserContent>
      <UserPosts />
    </StyledUserContent>
  );
}
