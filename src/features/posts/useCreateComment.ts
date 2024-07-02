import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment as createCommentApi } from "../../services/apiPosts";
import { CommentSendType } from "../../types";

export function useCreateComment() {
  const queryClient = useQueryClient();

  const { mutate: createComment, isPending } = useMutation({
    mutationFn: ({ user_id, post_id, content, user_name }: CommentSendType) =>
      createCommentApi({ user_id, post_id, content, user_name }),

    onSuccess: ({ data, post_id }) => {
      //create new cache
      queryClient.setQueryData([`comments-${post_id}`], data);

      //invalidate queries to re-fetch data
      queryClient.invalidateQueries({ queryKey: [`comments-${post_id}`] });
    },
  });

  return { createComment, isPending };
}
