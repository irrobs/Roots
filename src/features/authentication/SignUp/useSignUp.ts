import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export default function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ email, password, name }: UserData) =>
      signUpApi({ email, password, name }),

    onSuccess: () => {
      toast("Usuário criado com sucesso!");
    },
  });

  return { signUp, isPending };
}
