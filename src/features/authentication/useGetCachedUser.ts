import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PartialCachedUser } from "../../types";

export function useGetCachedUser<T = PartialCachedUser>() {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<T>(["user"]);

  if (!data) {
    toast.error("Nenhum usuário encontrado");
    throw new Error("Nenhum usuário encontrado");
  }

  return data;
}
