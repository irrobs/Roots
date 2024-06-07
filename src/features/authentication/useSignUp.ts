import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";

interface UserData {
  email: string;
  password: string;
}

export default function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ email, password }: UserData) =>
      signUpApi({ email, password }),

    onSuccess: () => {},
  });

  return { signUp, isPending };
}
