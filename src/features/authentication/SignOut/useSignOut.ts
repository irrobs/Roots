import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signOut, isPending } = useMutation({
    mutationFn: () => signOutApi(),

    onSuccess: () => {
      queryClient.removeQueries();

      navigate("/login", { replace: true });
    },
  });

  return { signOut, isPending };
}
