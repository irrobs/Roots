import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLike as deleteLikeApi } from "../../services/apiPosts";
import { LikeType } from "../../types";

export function useDeleteLike() {
  const queryClient = useQueryClient();
  const { mutate: deleteLike, isPending } = useMutation({
    mutationFn: ({ user_id, post_id }: LikeType) =>
      deleteLikeApi({ user_id, post_id }),

    onSuccess: (post_id) => {
      //invalidate the data so it is re-fetched
      queryClient.invalidateQueries({ queryKey: [`likes-${post_id}`] });
    },
  });

  return { deleteLike, isPending };
}
