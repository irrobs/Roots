import styled from "styled-components";
import Button from "./Button";
import { IoPencil } from "react-icons/io5";
import UserContentChoices from "./UserContentChoices";

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
  position: absolute;
  transform: translate(10%, -50%);
  width: 19.2rem;
  height: 19.2rem;
  border-radius: 100%;
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

export default function UserBio() {
  return (
    <StyledUserBio>
      <BackgroundImage src="/public/post-photo.png" alt="Foto de capa" />

      <UserInfoContainer>
        <ProfilePicture
          src="/public/profile-picture.png"
          alt="Foto de perfil"
        />
        <UserInfo>
          <Username>Matheus Escobar</Username>
          <UserFriends>200 amigos</UserFriends>
        </UserInfo>

        <EditButton variation="secondary" size="small">
          <IoPencil />
        </EditButton>
        <UserDescription>
          Curioso por natureza e sempre em busca de novas amizades, adoro
          compartilhar histórias, explorar novos hobbies e aprender coisas
          novas. Se você gosta de conversas animadas sobre música, filmes,
          viagens ou simplesmente quer bater um papo divertido, vamos nos
          conectar e fazer parte dessa jornada juntos!
        </UserDescription>
      </UserInfoContainer>
      <UserContentChoices />
    </StyledUserBio>
  );
}
