import styled from "styled-components";
import Post from "./Post";

const PostsContainer = styled.section`
  margin-top: 1rem;
  width: 50%;
`;

export default function Posts() {
  return (
    <PostsContainer>
      <Post />
    </PostsContainer>
  );
}
