import { useMutation } from "@tanstack/react-query";
import { createComment as createCommentApi } from "../../services/apiPosts";
import { CommentType } from "../../types";

export function useCreateComment() {
  const { mutate: createComment, isPending } = useMutation({
    mutationFn: ({ user_id, post_id, content }: CommentType) =>
      createCommentApi({ user_id, post_id, content }),
  });

  return { createComment, isPending };
}
