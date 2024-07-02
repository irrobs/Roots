import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiPosts";

export function useGetLikes(post_id: number) {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: [`likes-${post_id}`],
    queryFn: () => getLikes(post_id),
  });
  let likes;

  if (isSuccess) likes = data.data;

  return { likes, isPending };
}
