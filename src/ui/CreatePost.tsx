import styled from "styled-components";
import Modal from "./Modal";
import CreatePostForm from "../features/posts/CreatePostForm";
import { useUser } from "../features/authentication/useUser";
import { device } from "../styles/breakpoints";

const StyledCreatePost = styled.div`
  background-color: var(--color-lime-500);
  width: 60%;
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    width: 75%;
  }

  & img {
    background-color: var(--color-gray-0);
    height: 4.8rem;
    width: 4.8rem;
    border-radius: var(--border-radius-full);
  }
`;

const FakeInput = styled.button`
  background-color: var(--color-gray-0);
  border: none;
  border-radius: var(--border-radius-full);
  width: 100%;
  height: 3.6rem;
  padding-left: 1rem;
  text-align: left;
  font-size: 1.6rem;
  color: var(--color-gray-500);
  font-weight: lighter;

  &:hover {
    background-color: var(--color-lime-200);
  }
`;

export default function CreatePost() {
  const { user } = useUser();
  const userData = user!.user_metadata;

  return (
    <StyledCreatePost>
      <img
        src={
          userData.profilePicture
            ? userData.profilePicture
            : "/default-profile-picture.svg"
        }
        alt="Foto de perfil"
      />
      <Modal>
        <>
          <Modal.Open opens="create-post-form">
            <FakeInput>Faça uma nova publicação</FakeInput>
          </Modal.Open>
          <Modal.Window name="create-post-form">
            <CreatePostForm />
          </Modal.Window>
        </>
      </Modal>
    </StyledCreatePost>
  );
}
