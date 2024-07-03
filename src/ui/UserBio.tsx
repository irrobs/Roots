import styled from "styled-components";
import Button from "./Button";
import { IoAdd } from "react-icons/io5";
import UserContentChoices from "./UserContentChoices";

import { useParams } from "react-router-dom";
import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useCreateFriendship } from "../features/user/useCreateFriendship";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useGetFriends } from "../features/user/useGetFriends";

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

const AddButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 0;
  border-radius: var(--border-radius-sm);
  padding: 1rem 2rem;
  font-size: 1.8rem;

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

  const { getUserWithId } = useGetUserWithId();
  const { createFriendship, isPending } = useCreateFriendship();
  const { friends, isPending: isPendingGetFriends } = useGetFriends(
    id as string
  );

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserWithId(id as string, {
      onSuccess: (data) => setUser(data),
    });
  }, [getUserWithId, id]);

  if (!user) return <p>Loading...</p>;

  console.log(friends);

  const userData = user.user_metadata;

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

          {!isPendingGetFriends && (
            <AddButton
              variation="secondary"
              size="small"
              onClick={() =>
                createFriendship({
                  user_id: loggedUser.id,
                  friend_id: id as string,
                })
              }
            >
              <p>{isPending ? "Adicionando..." : "Adicionar amigo"}</p>
              <IoAdd />
            </AddButton>
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
