import styled, { keyframes } from "styled-components";
import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { useEffect, useState } from "react";
import { PostRenderType } from "../types";
import { formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";

import LikesContainer from "./LikesContainer";
import Comments from "../features/posts/Comments";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const StyledLoadingPost = styled.div`
  min-height: 50rem;
  margin-bottom: 5cqb;
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    45deg,
    var(--color-gray-500),
    var(--color-gray-0)
  );

  animation: ${gradientAnimation} 5s linear infinite;
`;

const StyledPost = styled.div`
  font-size: 1.6rem;
  color: var(--color-gray-800);
  margin-bottom: 5rem;

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

const Description = styled.p`
  margin-bottom: 1rem;
`;

export default function Post({ post }: { post: PostRenderType }) {
  const { getUserWithId, isPending } = useGetUserWithId();

  const [postUser, setPostUser] = useState("");
  const [fullPost, setFullPost] = useState(
    post.text.length <= 200 ? true : false
  );

  useEffect(() => {
    getUserWithId(post.user_id, {
      onSuccess: (data) => {
        setPostUser(data.user_metadata.name);
      },
    });
  }, [getUserWithId, post.user_id]);

  if (isPending) return <StyledLoadingPost />;

  return (
    <StyledPost>
      <PostUser>
        <img src="/profile-picture.png" alt="User profile picture" />
        <span>
          {postUser} - há {formatDistanceToNow(post.created_at, { locale: pt })}
        </span>
      </PostUser>

      <img
        src={post.image ? post.image : "/default-cover-photo.png"}
        alt="Post Image"
      />

      <PostInfo>
        <LikesContainer post_id={post.id} />
      </PostInfo>

      <Description>
        {fullPost ? post.text : post.text.slice(0, 200)}
        {fullPost ? (
          post.text.length > 200 ? (
            <button onClick={() => setFullPost(!fullPost)}>...Ver menos</button>
          ) : null
        ) : (
          <button onClick={() => setFullPost(!fullPost)}>...Ver mais</button>
        )}
      </Description>

      <Comments post={post} />
    </StyledPost>
  );
}
