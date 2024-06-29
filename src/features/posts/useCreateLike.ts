import { useMutation } from "@tanstack/react-query";
import { createLike as createLikeApi } from "../../services/apiPosts";
import { LikeType } from "../../types";
import toast from "react-hot-toast";

export function useCreateLike() {
  const { mutate: createLike, isPending } = useMutation({
    mutationFn: ({ user_id, post_id }: LikeType) =>
      createLikeApi({ user_id, post_id }),

    onSuccess: () => {
      toast.success("success");
    },
  });

  return { createLike, isPending };
}
