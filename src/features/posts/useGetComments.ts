import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiPosts";

export function useGetComments(post_id: number) {
  const { data: comments, isPending } = useQuery({
    queryKey: [`comments-${post_id}`],
    queryFn: () => getComments(post_id),
  });

  return { comments, isPending };
}
