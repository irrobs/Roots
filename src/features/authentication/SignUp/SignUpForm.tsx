import styled from "styled-components";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import Input from "../../../ui/Input";
import Logo from "../../../ui/Logo";
import InputContainer from "../../../ui/InputContainer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import useSignUp from "./useSignUp";
import LoadingMini from "../../../ui/LoadingMini";
import { useAppDispatch, useAppSelector } from "../../../store";
import { typeEmail, typePassword } from "../authenticationSlice";

const FormText = styled.p`
  text-align: center;
`;

const StyledSpan = styled.span`
  display: inline-block;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  & > * {
    width: 100%;
    height: 100%;
    stroke: var(--color-gray-600);
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  color: var(--color-red-600);
  bottom: 0%;
  transform: translateY(100%);
`;

export default function SignUpForm() {
  const { email, password } = useAppSelector((state) => state.authentication);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const { signUp, isPending } = useSignUp();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    if (password !== confirmPassword) return toast("Senhas não são iguais!");

    signUp({ name, email, password });
  }

  return (
    <StyledForm variation="modal" onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormText>Cadastre-se para pode se conectar com seus amigos</FormText>

      <InputContainer>
        <Input
          type="text"
          placeholder="Nome"
          {...register("name", { required: true })}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          disabled={isPending}
        />
        {errors.name?.type === "required" && (
          <ErrorMessage>Está campo é obrigatório</ErrorMessage>
        )}
      </InputContainer>

      <InputContainer>
        <Input
          type="email"
          placeholder="Digite seu email"
          {...register("email", { required: true })}
          value={email}
          onChange={(e) => dispatch(typeEmail({ email: e.target.value }))}
          disabled={isPending}
        />
        {errors.email?.type === "required" && (
          <ErrorMessage>Está campo é obrigatório</ErrorMessage>
        )}
      </InputContainer>

      <InputContainer>
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Senha"
          {...register("password", { required: true, minLength: 8 })}
          value={password}
          onChange={(e) => dispatch(typePassword({ password: e.target.value }))}
          disabled={isPending}
        />
        {errors.password?.type === "required" && (
          <ErrorMessage>Está campo é obrigatório</ErrorMessage>
        )}
        {errors.password?.type === "minLength" && (
          <ErrorMessage>Senha muito pequena</ErrorMessage>
        )}

        <StyledSpan onClick={() => setSeePassword(!seePassword)}>
          {seePassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </StyledSpan>
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Confirme sua senha"
          {...register("confirm-password", { required: true, minLength: 8 })}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          disabled={isPending}
        />
        {errors.password?.type === "required" && (
          <ErrorMessage>Está campo é obrigatório</ErrorMessage>
        )}
        {errors.password?.type === "minLength" && (
          <ErrorMessage>Senha muito pequena</ErrorMessage>
        )}
      </InputContainer>

      <Button>{isPending ? <LoadingMini /> : "Cadastre-se"}</Button>
    </StyledForm>
  );
}
