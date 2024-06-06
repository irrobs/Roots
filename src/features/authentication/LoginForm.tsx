import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Logo from "../../ui/Logo";

import styled from "styled-components";
import Input from "../../ui/Input";
import { CheckboxContainer, Checkbox, Label } from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

const StyledFormContainer = styled.div`
  background-color: var(--color-lime-200);
  padding: 2rem 4rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-md);
`;

const StyledForm = styled.form`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
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

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const { login, isPending } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();

  function onSubmit({ email, password }: LoginData) {
    login({ email, password });
  }

  return (
    <StyledFormContainer>
      <Logo type="login" />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputContainer>
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
        </StyledInputContainer>

        <StyledInputContainer>
          <Input
            type={seePassword ? "text" : "password"}
            placeholder="Digite sua senha"
            {...register("password", { required: true, minLength: 8 })}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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
        </StyledInputContainer>

        <CheckboxContainer>
          <Checkbox type="checkbox" id="checkbox-remember" />
          <Label htmlFor="checkbox-remember">Lembre de mim</Label>
        </CheckboxContainer>

        <Button category="primary" type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Entrar"}
        </Button>
      </StyledForm>
    </StyledFormContainer>
  );
}
