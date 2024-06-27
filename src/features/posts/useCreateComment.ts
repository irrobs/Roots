import { useMutation } from "@tanstack/react-query";
import { createComment as createCommentApi } from "../../services/apiPosts";
import { CommentSendType } from "../../types";

export function useCreateComment() {
  const { mutate: createComment, isPending } = useMutation({
    mutationFn: ({ user_id, post_id, content, user_name }: CommentSendType) =>
      createCommentApi({ user_id, post_id, content, user_name }),
  });

  return { createComment, isPending };
}
