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
import { device } from "../../styles/breakpoints";

const UserFormContainer = styled.form`
  position: relative;
  display: grid;
  grid-template-rows: 50% 1fr min-content;
  height: 60vh;
  margin-bottom: 3rem;

  @media ${device.smallPhone} {
    height: 70vh;
  }
`;

const BackgroundImageInput = styled.input`
  text-align: center;
  cursor: pointer;
  padding-top: 5rem;
  height: 100%;
  width: 100%;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const ProfilePictureInput = styled.input`
  padding-top: 6rem;
  cursor: pointer;
  background-color: var(--color-gray-0);
  position: absolute;
  transform: translate(10%, -50%);
  width: 19.2rem;
  height: 19.2rem;
  border-radius: 100%;

  @media ${device.smallLaptop} {
    width: 14rem;
    height: 14rem;
  }

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const SubmitButton = styled(Button)`
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

const UserInput = styled(Input)`
  margin-top: 1rem;
  margin-left: 22rem;
  width: 30ch;

  @media ${device.smallLaptop} {
    margin-left: 17rem;
  }

  @media ${device.smallPhone} {
    margin-left: 2rem;
    margin-top: 8rem;
  }
`;

const DescriptionContainer = styled.div`
  margin: 8rem 0;
  display: flex;
  flex-direction: column;

  @media ${device.smallLaptop} {
    margin: 2rem 0;
  }

  & label {
    color: var(--color-gray-600);
    text-align: center;
  }
`;

const DescriptionInput = styled.textarea`
  resize: none;
  width: 80%;
  align-self: center;

  @media ${device.smallPhone} {
    width: 100%;
  }

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
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);

  const { edit, isPending } = useEditUser();
  const { register, handleSubmit } = useForm();

  function onSubmit() {
    edit(
      { name, description, profilePicture, coverPhoto },
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
      <BackgroundImageInput
        {...register("cover")}
        type="file"
        accept="image/*"
        onChange={(e) =>
          e.target.files
            ? setCoverPhoto(e.target.files[0])
            : setCoverPhoto(null)
        }
        disabled={isPending}
      />

      <UserInfoContainer>
        <ProfilePictureInput
          {...register("profile")}
          type="file"
          accept="image/*"
          onChange={(e) =>
            e.target.files
              ? setProfilePicture(e.target.files[0])
              : setProfilePicture(null)
          }
          disabled={isPending}
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
      </UserInfoContainer>
    </UserFormContainer>
  );
}
