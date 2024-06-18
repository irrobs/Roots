import styled from "styled-components";
import Button from "./Button";
import { IoPencil } from "react-icons/io5";

const StyledUserBio = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 60vh;
  width: 90%;
  margin: 2rem auto;
`;

const BackgroundImage = styled.img`
  grid-row: 1;
  height: 100%;
  width: 100%;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const UserInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfilePicture = styled.img`
  transform: translateY(-50%);
  margin-left: 3rem;
  width: 19.2rem;
  height: 19.2rem;
  border-radius: 100%;
  shape-outside: circle(50%);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  line-height: 1;
  flex-grow: 0;
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
  margin: 0 auto;
  max-width: 140ch;
  font-size: 1.8rem;
  margin-bottom: auto;
`;

export default function UserBio() {
  return (
    <StyledUserBio>
      <BackgroundImage src="/public/post-photo.png" alt="Foto de capa" />

      <div style={{ position: "relative" }}>
        <UserInfoContainer>
          <ProfilePicture
            src="/public/profile-picture.png"
            alt="Foto de perfil"
          />
          <UserInfo>
            <Username>Matheus Escobar</Username>
            <UserFriends>200 amigos</UserFriends>
          </UserInfo>
        </UserInfoContainer>
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
      </div>
    </StyledUserBio>
  );
}
