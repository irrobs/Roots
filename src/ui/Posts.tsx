import styled from "styled-components";
import Post from "./Post";
import { useQueryPosts } from "../features/posts/useQueryPosts";

const PostsContainer = styled.section`
  margin-top: 1rem;
  width: 50%;
`;

export default function Posts() {
  const { posts, isPending } = useQueryPosts();

  if (isPending) return <p>Loading...</p>;

  if (!posts) return <p>Nenhum post encontrado</p>;

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
}
