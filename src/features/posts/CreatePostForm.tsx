import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-gray-500);
  font-weight: 600;
`;

const UserImg = styled.img`
  border-radius: var(--border-radius-full);
  width: 10%;
`;

const UserName = styled.span``;

const PostText = styled.textarea`
  resize: none;
  border: none;
  padding: 1rem;
  border-radius: var(--border-radius-md);
  font-family: "Nunito";
  color: var(--color-gray-800);
`;

const PostImg = styled.input`
  width: fit-content;
`;

export default function CreatePostForm() {
  return (
    <Form variation="post">
      <UserContainer>
        <UserImg src="/profile-picture.png" alt="Foto do usuário" />
        <UserName>Matheus Escobar</UserName>
      </UserContainer>
      <PostText
        id="post-text"
        rows={15}
        placeholder="Sobre o que quer falar?"
      />
      <PostImg type="file" />

      <Button>Publicar</Button>
    </Form>
  );
}
