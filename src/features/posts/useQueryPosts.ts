import { useQuery } from "@tanstack/react-query";
import { PostRenderType } from "../../types";
import { getPosts } from "../../services/apiPosts";

type PostQueryType = {
  posts: PostRenderType[] | undefined;
  isPending: boolean;
};

export function useQueryPosts(): PostQueryType {
  const { isPending, data: posts } = useQuery<PostRenderType[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return {
    isPending,
    posts,
  };
}
