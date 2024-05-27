import styled from "styled-components";

const StyledTimeline = styled.main`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreatePost = styled.div`
  background-color: var(--color-lime-500);
  width: 60%;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  gap: 2rem;

  & img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: var(--border-radius-full);
  }
`;

const FakeInput = styled.button`
  background-color: var(--color-gray-0);
  border: none;
  border-radius: var(--border-radius-full);
  width: 100%;
  height: 3.6rem;
  padding-left: 1rem;
  text-align: left;
  font-size: 1.6rem;
  color: var(--color-gray-500);
  font-weight: lighter;

  &:hover {
    background-color: var(--color-lime-200);
  }
`;

const SortContainer = styled.div`
  margin-top: 1rem;
  background-color: var(--color-lime-500);
  color: var(--color-gray-0);
  padding: 0rem 1.5rem;
  border-radius: var(--border-radius-full);
  font-size: 2rem;
  align-self: flex-end;
`;

const SortBy = styled.select`
  background-color: transparent;
  border: none;
  color: var(--color-gray-0);
  cursor: pointer;
  outline-color: var(--color-lime-200);
  outline-width: 1px;
`;

const PostsContainer = styled.section`
  margin-top: 4rem;
  width: 50%;
`;

const Post = styled.div`
  border: 1px solid black;
  height: 50rem;
`;

export default function Timeline() {
  return (
    <StyledTimeline>
      <CreatePost>
        <img src="/profile-picture.png" alt="User profile picture" />
        <FakeInput>Faça uma publicação</FakeInput>
      </CreatePost>

      <SortContainer>
        <label htmlFor="sort-by">sort: </label>
        <SortBy id="sort-by">
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
        </SortBy>
      </SortContainer>

      <PostsContainer>
        <Post />
      </PostsContainer>
    </StyledTimeline>
  );
}
