import { IoHeartOutline } from "react-icons/io5";
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
  margin-top: 2rem;
  width: 50%;
`;

const Post = styled.div`
  min-height: 50rem;
  font-size: 1.6rem;
  color: var(--color-gray-800);
  margin-bottom: 2rem;

  & img {
    border-radius: var(--border-radius-sm);
  }

  & p button {
    background-color: transparent;
    border: none;
    color: var(--color-gray-500);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  color: var(--color-gray-500);

  & img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: var(--border-radius-full);
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;

  & button {
    background-color: transparent;
    border: none;
  }

  & button > * {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Likes = styled.span`
  display: flex;
  gap: 0.5rem;

  & span {
    font-weight: lighter;
  }
`;

const ButtonSeeComments = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-gray-500);
  display: block;
  margin: 1rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const NewCommentInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: 1px solid var(--color-gray-500);
  outline: none;
  width: 100%;
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
        <Post>
          <PostUser>
            <img src="/profile-picture.png" alt="User profile picture" />
            <span>Joelson Santana - há 10h</span>
          </PostUser>

          <img src="/post-photo.png" alt="Post Image" />

          <PostInfo>
            <Likes>
              <strong>217</strong>
              <span>Curtidas</span>
            </Likes>
            <button>
              <IoHeartOutline />
            </button>
          </PostInfo>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eveniet
            tempore eligendi nisi explicabo perspiciatis error magnam eius
            delectus illo repellat rerum hic quae quo alias, corporis quam iusto
            sint. <button>...Ver mais</button>
          </p>

          <ButtonSeeComments>Ver comentários...</ButtonSeeComments>

          <NewCommentInput type="text" placeholder="Escreva um comentário" />
        </Post>
      </PostsContainer>
    </StyledTimeline>
  );
}
