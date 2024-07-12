import styled from "styled-components";
import Post from "./Post";
import { useQueryPosts } from "../features/posts/useQueryPosts";
import LoadingMini from "./LoadingMini";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useGetFollowings } from "../features/user/useGetFollowings";
import { useSearchParams } from "react-router-dom";

const PostsContainer = styled.section`
  margin-top: 1rem;
  width: 50%;
`;

export default function Posts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "recent";
  const user = useGetCachedUser();
  const { posts, isPending: isPendingPosts } = useQueryPosts();
  const { followings, isPending: isPendingFollowings } = useGetFollowings(
    user.id
  );

  if (isPendingPosts || isPendingFollowings) return <LoadingMini />;
  if (!posts) return <p>Nenhum post encontrado</p>;

  const friendIds = new Set(followings?.map((friend) => friend.friend_id));
  const filteredPosts = posts.filter((post) => friendIds.has(post.user_id));

  let sortedPosts;
  if (sortBy === "recent") {
    sortedPosts = filteredPosts.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  return (
    <PostsContainer>
      {sortedPosts!.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
}
