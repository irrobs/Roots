import styled from "styled-components";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import Input from "../../../ui/Input";
import Logo from "../../../ui/Logo";
import InputContainer from "../../../ui/InputContainer";
import { useForm } from "react-hook-form";
import useResetPasswordRedirect from "./useResetPasswordRedirect";
import LoadingMini from "../../../ui/LoadingMini";
import { useAppDispatch, useAppSelector } from "../../../store";
import { typeEmail } from "../authenticationSlice";

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
  const email = useAppSelector((state) => state.authentication.email);
  const dispatch = useAppDispatch();

  const { resetPasswordRedirect, isPending } = useResetPasswordRedirect();

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
      <Logo />
      <FormText>
        Insira seu email para receber um email de redefinição de senha
      </FormText>

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

      <Button>{isPending ? <LoadingMini /> : "Enviar"}</Button>
    </StyledForm>
  );
}
