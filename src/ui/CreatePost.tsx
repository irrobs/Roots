import styled from "styled-components";

const StyledCreatePost = styled.div`
  background-color: var(--color-lime-500);
  width: 60%;
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;

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

export default function CreatePost() {
  return (
    <StyledCreatePost>
      <img src="/profile-picture.png" alt="User profile picture" />
      <FakeInput>Faça uma publicação</FakeInput>
    </StyledCreatePost>
  );
}
