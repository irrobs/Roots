import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFriendship as deleteFriendshipApi } from "../../services/apiUser";
import { FriendSendType } from "../../types";
import toast from "react-hot-toast";

export function useDeleteFriendship() {
  const queryClient = useQueryClient();
  const { mutate: deleteFriendship, isPending } = useMutation({
    mutationFn: ({ user_id, friend_id }: FriendSendType) =>
      deleteFriendshipApi({ user_id, friend_id }),

    onSuccess: () => {
      toast.success("Removido");
      queryClient.invalidateQueries();
    },
  });

  return { deleteFriendship, isPending };
}
