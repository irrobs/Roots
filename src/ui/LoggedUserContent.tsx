import styled from "styled-components";
import UserPosts from "./UserPosts";
import { useSearchParams } from "react-router-dom";
import FriendList from "../features/friend-list/FriendList";

const StyledUserContent = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoggedUserContent() {
  const [searchParams] = useSearchParams();
  const choice = searchParams.get("choice") || "posts";

  return (
    <StyledUserContent>
      {choice === "posts" && <UserPosts />}
      {choice === "friends" && <FriendList layout="row" />}
    </StyledUserContent>
  );
}
