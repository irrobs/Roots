import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../../services/apiAuth";
import { LoginData } from "../../../types";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginData) =>
      loginApi({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/main", { replace: true });
    },

    onError: () => {
      toast.error("Email ou senha inválidos");
    },
  });

  return { login, isPending };
}
