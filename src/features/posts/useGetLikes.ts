import { useMutation } from "@tanstack/react-query";
import { getLikes as getLikesApi } from "../../services/apiPosts";

export function useGetLikes() {
  const { mutate: getLikes, isPending } = useMutation({
    mutationFn: (post_id) => getLikesApi(post_id),
  });

  return { getLikes, isPending };
}
