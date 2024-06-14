import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ModalContext } from "../../../ui/Modal";
import { UserData } from "../../../types";

export default function useSignUp() {
  const { close } = useContext(ModalContext);
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ email, password, name }: UserData) =>
      signUpApi({ email, password, name }),

    onSuccess: () => {
      close();
      toast("Usuário criado com sucesso!");
    },
  });

  return { signUp, isPending };
}
