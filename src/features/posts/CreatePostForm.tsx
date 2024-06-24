import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUser } from "../authentication/useUser";
import { useCreatPost } from "./useCreatePost";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-lime-700);
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

const PostImgInput = styled.input`
  width: fit-content;
  display: none;
`;

const Label = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
`;

export default function CreatePostForm() {
  const [postImage, setPostImage] = useState<File | null>(null);
  const [postText, setPostText] = useState("");

  const { user } = useUser();
  const { createPost, isPending } = useCreatPost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submits only if there is user and at leat a text
  function onSubmit() {
    if (user) createPost({ postText, postImage, userId: user.id });
  }

  return (
    <Form variation="post" onSubmit={handleSubmit(onSubmit)}>
      <UserContainer>
        <UserImg src="/profile-picture.png" alt="Foto do usuário" />
        <UserName>Matheus Escobar</UserName>
      </UserContainer>
      <div>
        <PostImgInput
          type="file"
          accept="image/*"
          id="post-img"
          {...register("postImage")}
          onChange={(e) =>
            e.target.files
              ? setPostImage(e.target.files[0])
              : setPostImage(null)
          }
          disabled={isPending}
        />
        <Label htmlFor="post-img">Insira uma imagem</Label>
      </div>

      <PostText
        id="postText"
        rows={15}
        placeholder="Sobre o que quer falar?"
        {...register("postText", { required: true })}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        disabled={isPending}
      />
      {errors.postText?.type === "required" && (
        <p>Você precisa escrever algo para fazer uma publicação</p>
      )}
      <Button type="submit" disabled={isPending || postText === ""}>
        Publicar
      </Button>
    </Form>
  );
}
