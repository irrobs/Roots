import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLike as createLikeApi } from "../../services/apiPosts";
import { LikeType } from "../../types";

export function useCreateLike() {
  const queryClient = useQueryClient();
  const { mutate: createLike, isPending } = useMutation({
    mutationFn: ({ user_id, post_id }: LikeType) =>
      createLikeApi({ user_id, post_id }),

    onSuccess: ({ data, post_id }) => {
      //create the new data in cache
      queryClient.setQueryData([`likes-${post_id}`], data);
      //invalidate the new data so it is fetched
      queryClient.invalidateQueries({ queryKey: [`likes-${post_id}`] });
    },
  });

  return { createLike, isPending };
}
