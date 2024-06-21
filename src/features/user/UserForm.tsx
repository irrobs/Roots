import { IoCheckmark } from "react-icons/io5";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import { useEditUser } from "./useEditUser";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const UserFormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const ProfilePicture = styled.img`
  cursor: pointer;
  background-color: var(--color-gray-0);
  position: absolute;
  transform: translate(10%, -50%);
  width: 19.2rem;
  height: 19.2rem;
  border-radius: 100%;
`;

const SubmitButton = styled(Button)`
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

const UserInput = styled(Input)`
  margin-top: 1rem;
  margin-left: 22rem;
  width: 30ch;
`;

const DescriptionContainer = styled.div`
  margin: 6rem 0 2rem;
  display: flex;
  flex-direction: column;

  & label {
    color: var(--color-gray-600);
  }
`;

const DescriptionInput = styled.textarea`
  resize: none;

  &:focus {
    outline: 2px solid var(--color-lime-500);
    outline-offset: -2px;
  }
`;

export default function UserForm({
  onSetEditMode,
}: {
  onSetEditMode: Dispatch<SetStateAction<boolean>>;
}) {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const userData = user!.user_metadata;

  const [name, setName] = useState(userData.name ? userData.name : "");
  const [description, setDescription] = useState(
    userData.description ? userData.description : ""
  );

  const { edit, isPending } = useEditUser();
  const { register, handleSubmit } = useForm();

  function onSubmit() {
    edit(
      { name, description },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          onSetEditMode(false);
          toast.success("Dados alterados com sucesso!");
        },
      }
    );
  }

  return (
    <UserFormContainer onSubmit={handleSubmit(onSubmit)}>
      <ProfilePicture
        src={
          userData.profilePicture
            ? userData.profilePicture
            : "/public/default-profile-picture.svg"
        }
        alt="Foto de perfil"
      />
      <UserInput
        placeholder="Digite o seu nome"
        maxLength={25}
        {...register("name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isPending}
      />

      <SubmitButton variation="secondary" size="small" type="submit">
        <IoCheckmark />
      </SubmitButton>

      <DescriptionContainer>
        <label htmlFor="description">Conte um pouco sobre você:</label>
        <DescriptionInput
          {...register("description")}
          rows={5}
          cols={80}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isPending}
        ></DescriptionInput>
      </DescriptionContainer>
    </UserFormContainer>
  );
}
