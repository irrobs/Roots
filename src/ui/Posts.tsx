import styled from "styled-components";
import Post from "./Post";
import { useQueryPosts } from "../features/posts/useQueryPosts";
import LoadingMini from "./LoadingMini";
import { useGetLoggedUserFriends } from "../features/user/useGetLoggedUserFriends";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";

const PostsContainer = styled.section`
  margin-top: 1rem;
  width: 50%;
`;

export default function Posts() {
  const user = useGetCachedUser();
  const { posts, isPending: isPendingPosts } = useQueryPosts();
  const { friends, isPending: isPendingFriends } = useGetLoggedUserFriends(
    user.id
  );

  if (isPendingPosts || isPendingFriends) return <LoadingMini />;
  if (!posts) return <p>Nenhum post encontrado</p>;

  const friendIds = new Set(friends?.map((friend) => friend.friend_id));
  const filteredPosts = posts.filter((post) => friendIds.has(post.user_id));
  const reversedPosts = [...filteredPosts].reverse();

  return (
    <PostsContainer>
      {reversedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
}
