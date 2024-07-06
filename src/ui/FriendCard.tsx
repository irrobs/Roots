import { IoEllipse } from "react-icons/io5";
import styled from "styled-components";

import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { FriendshipType } from "../types";
import { Link } from "react-router-dom";

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
    background-color: var(--color-lime-500);
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

export default function FriendCard({
  friendship,
}: {
  friendship: FriendshipType;
}) {
  const { user: friend, isPending } = useGetUserWithId(friendship.friend_id);

  if (isPending) return <p>Loading</p>;

  const friendData = friend!.user_metadata;

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
        <span>
          <span>
            <IoEllipse />
          </span>{" "}
          disponível
        </span>
      </div>
    </StyledFriendCard>
  );
}
