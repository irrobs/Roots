import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { IoPencil } from "react-icons/io5";
import UserContentChoices from "./UserContentChoices";
import { useState } from "react";
import UserForm from "../features/user/UserForm";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useGetFollowings } from "../features/user/useGetFollowings";
import { useGetFollowers } from "../features/user/useGetFollowers";
import { device } from "../styles/breakpoints";

const gradientAnimation = keyframes`
  0% {
    background-position: 150% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const StyledLoadingUserBio = styled.div`
  position: relative;
  height: 60vh;
  margin-bottom: 3rem;
  border-radius: var(--border-radius-sm);

  background: linear-gradient(
    90deg,
    var(--color-gray-0),
    var(--color-gray-200)
  );
  background-size: 300% 300%;

  animation: ${gradientAnimation} 2s linear infinite;
`;

const StyledUserBio = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 50% 1fr min-content;
  height: 60vh;
  margin-bottom: 3rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding-bottom: 2rem;
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

  @media ${device.smallLaptop} {
    width: 14rem;
    height: 14rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 22rem;
  line-height: 1;
  height: fit-content;

  @media ${device.smallLaptop} {
    margin-left: 17rem;
  }
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
  right: 1rem;
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
  color: var(--color-gray-800);

  @media ${device.smallLaptop} {
    margin: 4rem auto 0;
  }
`;

export default function LoggedUserBio() {
  const [editMode, setEditMode] = useState(false);
  const user = useGetCachedUser();
  const userData = user!.user_metadata; //since user needs to be logged to get to this page, user will always exist

  const { followings, isPending: isPendingGetFollowings } = useGetFollowings(
    user.id as string
  );

  const { followers, isPending: isPendingGetFollowers } = useGetFollowers(
    user.id as string
  );

  if (isPendingGetFollowers || isPendingGetFollowings)
    return <StyledLoadingUserBio />;

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
                {followers ? followers.length : 0}{" "}
                {followers?.length === 1 ? "seguidor" : "seguidores"} /{" "}
                {followings ? followings.length : 0} seguindo
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
