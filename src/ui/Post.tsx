import { IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledPost = styled.div`
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

export default function Post() {
  return (
    <StyledPost>
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
        tempore eligendi nisi explicabo perspiciatis error magnam eius delectus
        illo repellat rerum hic quae quo alias, corporis quam iusto sint.{" "}
        <button>...Ver mais</button>
      </p>

      <ButtonSeeComments>Ver comentários...</ButtonSeeComments>

      <NewCommentInput type="text" placeholder="Escreva um comentário" />
    </StyledPost>
  );
}
