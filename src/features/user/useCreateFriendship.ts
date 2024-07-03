import { useMutation } from "@tanstack/react-query";
import { createFriendship as createFriendshipApi } from "../../services/apiUser";
import { FriendSendType } from "../../types";
import toast from "react-hot-toast";

export function useCreateFriendship() {
  const { mutate: createFriendship, isPending } = useMutation({
    mutationFn: ({ user_id, friend_id }: FriendSendType) =>
      createFriendshipApi({ user_id, friend_id }),

    onSuccess: () => toast.success("Adicionado"),
  });

  return { createFriendship, isPending };
}
