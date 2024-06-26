import { useQuery } from "@tanstack/react-query";

type PostType = {
  create_at: Date;
  text: string;
  image: string | null;
  user_id: number;
};

type PostQueryType = {
  posts: PostType[] | undefined;
  isPending: boolean;
};

export function useQueryPosts(): PostQueryType {
  const { isPending, data: posts } = useQuery<PostType[]>({
    queryKey: ["posts"],
  });

  return {
    isPending,
    posts,
  };
}
