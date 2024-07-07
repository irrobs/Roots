import styled from "styled-components";
import FriendCard from "../../ui/FriendCard";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import LoadingMini from "../../ui/LoadingMini";
import { useGetFollowings } from "../user/useGetFollowings";

const StyledFriendList = styled.aside`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export default function FriendList() {
  const user = useGetCachedUser();
  const { followings, isPending } = useGetFollowings(user.id as string);

  if (isPending) return <LoadingMini />;
  if (!followings) return <p>Error</p>;

  return (
    <StyledFriendList>
      {followings.map((friend) => (
        <FriendCard friendship={friend} key={friend.friend_id} />
      ))}
    </StyledFriendList>
  );
}
