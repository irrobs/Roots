import styled from "styled-components";
import Button from "./Button";
import { IoPencil } from "react-icons/io5";
import UserContentChoices from "./UserContentChoices";
import { useState } from "react";
import UserForm from "../features/user/UserForm";
import { useGetLoggedUserFriends } from "../features/user/useGetLoggedUserFriends";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";

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

const EditButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: var(--border-radius-sm);

  & > * {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const UserDescription = styled.p`
  margin: 8rem auto 0;
  max-width: 140ch;
  font-size: 1.8rem;
`;

export default function LoggedUserBio() {
  const [editMode, setEditMode] = useState(false);
  const user = useGetCachedUser();
  const userData = user!.user_metadata; //since user needs to be logged to get to this page, user will always exist

  const { friends, isPending } = useGetLoggedUserFriends(user.id as string);

  isPending ? console.log("fetching") : console.log(friends);

  return (
    <StyledUserBio>
      {editMode ? (
        <UserForm onSetEditMode={setEditMode} />
      ) : (
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
              <UserFriends>
                {friends ? friends.length : 0}{" "}
                {friends?.length === 1 ? "amigo" : "amigos"}
              </UserFriends>
            </UserInfo>

            <EditButton
              variation="secondary"
              size="small"
              onClick={() => setEditMode(!editMode)}
            >
              <IoPencil />
            </EditButton>
            <UserDescription>
              {userData.description
                ? userData.description
                : "Escreva sobre você para te conhecerem melhor!"}
            </UserDescription>
          </UserInfoContainer>
          <UserContentChoices />
        </>
      )}
    </StyledUserBio>
  );
}
