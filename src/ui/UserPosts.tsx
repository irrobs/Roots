import styled from "styled-components";
import Post from "./Post";
import { useQueryPosts } from "../features/posts/useQueryPosts";
import LoadingMini from "./LoadingMini";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useParams } from "react-router-dom";

const PostsContainer = styled.section`
  margin-top: 1rem;
  width: 50%;
`;

export default function UserPosts() {
  const { id } = useParams();
  const user = useGetCachedUser();
  const { posts, isPending: isPendingPosts } = useQueryPosts();

  if (isPendingPosts) return <LoadingMini />;
  if (!posts) return <p>Nenhum post encontrado</p>;

  const filteredPosts = id
    ? posts.filter((post) => post.user_id === id)
    : posts.filter((post) => post.user_id === user.id);
  const reversedPosts = [...filteredPosts].reverse();

  return (
    <PostsContainer>
      {reversedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
}
