import styled from "styled-components";
import FriendCard from "../../ui/FriendCard";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import { useGetLoggedUserFriends } from "../user/useGetLoggedUserFriends";
import LoadingMini from "../../ui/LoadingMini";

const StyledFriendList = styled.aside`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function FriendList() {
  const user = useGetCachedUser();
  const { friends, isPending } = useGetLoggedUserFriends(user.id as string);

  if (isPending) return <LoadingMini />;
  if (!friends) return <p>Error</p>;

  return (
    <StyledFriendList>
      {friends.map((friend) => (
        <FriendCard friendship={friend} key={friend.friend_id} />
      ))}
    </StyledFriendList>
  );
}
