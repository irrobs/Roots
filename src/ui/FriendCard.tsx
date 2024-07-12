import { IoChatbubbleEllipses, IoEllipse } from "react-icons/io5";
import styled from "styled-components";
import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { FriendshipType } from "../types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useOpenChat } from "../features/chat/useOpenChat";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";

type UserInfoProps = {
  onlineStatus: "offline" | "online";
};

const StyledFriendCard = styled(Link)`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-md);
  gap: 1rem;
  padding: 0.5rem;
  color: var(--color-gray-500);
  font-size: 1.6rem;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-lime-200);
  }

  & span {
    font-weight: lighter;
    font-size: 1.2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    line-height: 1;

    & span {
      color: var(--color-green-600);
    }
  }
`;

const FriendProfilePicture = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: var(--border-radius-full);
  background-color: var(--color-gray-0);
`;

const UserStatus = styled.div<UserInfoProps>`
  font-weight: lighter;
  font-size: 1.6rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  line-height: 1;

  & span {
    height: 1.6rem;
    color: ${(props) =>
      props.onlineStatus === "offline"
        ? "var(--color-gray-200)"
        : "var(--color-green-600)"};
  }

  & p {
    text-transform: capitalize;
  }
`;

const MessageButton = styled(Button)`
  margin-left: auto;
  color: var(--color-lime-500);

  &:hover {
    color: var(--color-lime-700);
  }
`;

export default function FriendCard({
  friendship,
}: {
  friendship: FriendshipType;
}) {
  const { openChat } = useOpenChat();
  const { user: friend, isPending } = useGetUserWithId(friendship.friend_id);
  const user = useGetCachedUser();

  if (isPending) return <p>Loading</p>;

  const friendData = friend!.user_metadata;

  function handleOpenChat(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    openChat({ user1_id: user.id, user2_id: friend!.id });
  }

  return (
    <StyledFriendCard to={`/user/${friend!.id}`}>
      <FriendProfilePicture
        src={
          friendData.profilePicture
            ? friendData.profilePicture
            : "/default-profile-picture.svg"
        }
        alt="Foto de usuário"
      />

      <div>
        <p>{friendData.name}</p>
        <UserStatus onlineStatus={friendData.status}>
          <span>
            <IoEllipse />
          </span>
          <p>{friendData.status}</p>
        </UserStatus>
      </div>
      <MessageButton
        variation="tertiary"
        size="small"
        onClick={(e) => handleOpenChat(e)}
      >
        <IoChatbubbleEllipses />
      </MessageButton>
    </StyledFriendCard>
  );
}
