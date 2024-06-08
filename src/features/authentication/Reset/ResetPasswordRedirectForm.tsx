import styled from "styled-components";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import Input from "../../../ui/Input";
import Logo from "../../../ui/Logo";
import InputContainer from "../../../ui/InputContainer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useResetPasswordRedirect from "./useResetPasswordRedirect";

const FormText = styled.p`
  text-align: center;
`;

const ErrorMessage = styled.p`
  position: absolute;
  color: var(--color-red-600);
  bottom: 0%;
  transform: translateY(100%);
`;

export default function ResetPasswordRedirectForm() {
  const [email, setEmail] = useState("");

  const {resetPasswordRedirect, isPending} = useResetPasswordRedirect()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    resetPasswordRedirect(email);
  }

  return (
    <StyledForm variation="modal" onSubmit={handleSubmit(onSubmit)}>
      <Logo type="login" />
      <FormText>Insira seu email para receber um email de redefinição de senha</FormText>

      <InputContainer>
        <Input
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true })}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={isPending}
        />
        {errors.email?.type === "required" && (
          <ErrorMessage>Está campo é obrigatório</ErrorMessage>
        )}
      </InputContainer>

      <Button>Enviar</Button>
    </StyledForm>
  );
}
