import { useQuery } from "@tanstack/react-query";
import { PostRenderType } from "../../types";

type PostQueryType = {
  posts: PostRenderType[] | undefined;
  isPending: boolean;
};

export function useQueryPosts(): PostQueryType {
  const { isPending, data: posts } = useQuery<PostRenderType[]>({
    queryKey: ["posts"],
  });

  return {
    isPending,
    posts,
  };
}
