import styled, { css } from "styled-components";
import FriendCard from "../../ui/FriendCard";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import LoadingMini from "../../ui/LoadingMini";
import { useGetFollowings } from "../user/useGetFollowings";
import { useParams } from "react-router-dom";
import { device } from "../../styles/breakpoints";
import { useAppSelector } from "../../store";

const StyledFriendList = styled.aside<{ $layout: string; $isOpen: boolean }>`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: hidden;

  ${({ $layout }) =>
    $layout === "row" &&
    css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 5rem;

      @media ${device.smallLaptop} {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
      }

      @media ${device.smallTablet} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        margin-bottom: 5rem;
      }

      @media ${device.smallPhone} {
        column-gap: 1rem;
      }
    `}

  ${({ $layout, $isOpen }) =>
    $layout === "column" &&
    css`
      height: calc(100% - 8rem);
      @media ${device.smallTablet} {
        position: absolute;
        background-color: var(--color-gray-0);
        height: calc(100% - 12rem);
        right: 0;
        padding-bottom: 10rem;

        width: ${$isOpen ? "22rem" : "0rem"};
        padding: ${$isOpen ? "2rem 1rem" : "2rem 0rem"};
        transition: width 0.3s ease-out;
      }
    `}
`;

interface FriendListProps {
  layout?: string;
}

export default function FriendList({ layout = "column" }: FriendListProps) {
  const { id } = useParams();
  const user = useGetCachedUser();
  const { followings, isPending } = useGetFollowings(id ? id : user.id);
  const isOpenFriendList = useAppSelector(
    (state) => state.authentication.isOpenedFriendList
  );

  if (isPending) return <LoadingMini />;
  if (!followings) return <p>Error</p>;

  return (
    <StyledFriendList $layout={layout} $isOpen={isOpenFriendList}>
      {followings.map((friend) => (
        <FriendCard friendship={friend} key={friend.friend_id} />
      ))}
    </StyledFriendList>
  );
}
