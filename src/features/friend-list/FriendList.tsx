import styled, { css } from "styled-components";
import FriendCard from "../../ui/FriendCard";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import LoadingMini from "../../ui/LoadingMini";
import { useGetFollowings } from "../user/useGetFollowings";

const StyledFriendList = styled.aside<{ layout: string }>`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;

  ${({ layout }) =>
    layout === "row" &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 5rem;
    `}
`;

interface FriendListProps {
  layout?: string;
}

export default function FriendList({ layout = "column" }: FriendListProps) {
  const user = useGetCachedUser();
  const { followings, isPending } = useGetFollowings(user.id as string);

  if (isPending) return <LoadingMini />;
  if (!followings) return <p>Error</p>;

  return (
    <StyledFriendList layout={layout}>
      {followings.map((friend) => (
        <FriendCard friendship={friend} key={friend.friend_id} />
      ))}
    </StyledFriendList>
  );
}
