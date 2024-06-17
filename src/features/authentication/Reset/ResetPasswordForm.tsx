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
import useResetPassword from "./useResetPassword";
import { useAppDispatch, useAppSelector } from "../../../store";
import { typePassword } from "../authenticationSlice";

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
  const password = useAppSelector((state) => state.authentication.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const { resetPassword, isPending } = useResetPassword();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    if (password !== confirmPassword) return toast("Senhas não são iguais!");

    resetPassword(password);
  }

  return (
    <StyledForm variation="modal" onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormText>Insira sua nova senha</FormText>

      <InputContainer>
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Nova senha"
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
          placeholder="Confirme sua nova senha"
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

      <Button>Redefinir senha</Button>
    </StyledForm>
  );
}
