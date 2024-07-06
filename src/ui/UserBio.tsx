import styled from "styled-components";
import Button from "./Button";
import { IoPersonAddOutline, IoPersonRemoveOutline } from "react-icons/io5";
import UserContentChoices from "./UserContentChoices";

import { useParams } from "react-router-dom";
import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { useCreateFriendship } from "../features/user/useCreateFriendship";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useGetLoggedUserFriends } from "../features/user/useGetLoggedUserFriends";
import { useDeleteFriendship } from "../features/user/useDeleteFriendship";

const StyledUserBio = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 50% 1fr min-content;
  height: 60vh;
  margin-bottom: 3rem;
`;

const BackgroundImage = styled.img`
  grid-row: 1;
  height: 100%;
  width: 100%;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const ProfilePicture = styled.img`
  background-color: var(--color-gray-0);
  position: absolute;
  transform: translate(10%, -50%);
  width: 19.2rem;
  height: 19.2rem;
  border-radius: 100%;
  border: 2px solid var(--color-gray-0);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 22rem;
  line-height: 1;
  height: fit-content;
`;

const Username = styled.span`
  font-size: 2.4rem;
  color: var(--color-gray-800);
`;

const UserFriends = styled.span`
  color: var(--color-gray-500);
`;

const FriendButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 0;
  border-radius: var(--border-radius-sm);
  padding: 1rem 2rem;
  font-size: 1.8rem;
  display: flex;

  gap: 1rem;

  & > *:not(p) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const UserDescription = styled.p`
  margin: 8rem auto 0;
  max-width: 140ch;
  font-size: 1.8rem;
`;

export default function UserBio() {
  const { id } = useParams();
  const loggedUser = useGetCachedUser();

  const { user, isPending: isPendingGetUser } = useGetUserWithId(id as string);
  const { friends: loggedUserFriendships, isPending: isPendingGetFriends } =
    useGetLoggedUserFriends(loggedUser.id);
  const { createFriendship, isPending } = useCreateFriendship();
  const { deleteFriendship, isPending: isPendingDelete } =
    useDeleteFriendship();

  if (!user || isPendingGetUser || isPendingGetFriends)
    return <p>Loading...</p>;

  const userData = user!.user_metadata;
  const friendshipsIds = loggedUserFriendships?.map(
    (friendship) => friendship.friend_id
  );
  const isFriend = friendshipsIds?.includes(id as string);
  return (
    <StyledUserBio>
      <>
        <BackgroundImage
          src={
            userData.coverPhoto
              ? userData.coverPhoto
              : "/default-cover-photo.png"
          }
          alt="Foto de capa"
        />

        <UserInfoContainer>
          <ProfilePicture
            src={
              userData.profilePicture
                ? userData.profilePicture
                : "/default-profile-picture.svg"
            }
            alt="Foto de perfil"
          />
          <UserInfo>
            <Username>{userData ? userData.name : "username"}</Username>
            <UserFriends>200 amigos</UserFriends>
          </UserInfo>

          {isFriend ? (
            <FriendButton
              variation="secondary"
              size="small"
              onClick={() =>
                deleteFriendship({
                  user_id: loggedUser.id,
                  friend_id: id as string,
                })
              }
              disabled={isPendingDelete}
            >
              <p>{isPendingDelete ? "Removendo..." : "Remover amigo"}</p>
              <IoPersonRemoveOutline />
            </FriendButton>
          ) : (
            <FriendButton
              variation="secondary"
              size="small"
              onClick={() =>
                createFriendship({
                  user_id: loggedUser.id,
                  friend_id: id as string,
                })
              }
              disabled={isPending}
            >
              <p>{isPending ? "Adicionando..." : "Adicionar amigo"}</p>
              <IoPersonAddOutline />
            </FriendButton>
          )}

          <UserDescription>
            {userData.description
              ? userData.description
              : "Escreva sobre você para te conhecerem melhor!"}
          </UserDescription>
        </UserInfoContainer>
        <UserContentChoices />
      </>
    </StyledUserBio>
  );
}
