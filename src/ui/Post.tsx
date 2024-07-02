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
    background-position: 150% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const StyledLoadingPost = styled.div`
  height: 50rem;
  margin-bottom: 5rem;
  border-radius: var(--border-radius-sm);

  background: linear-gradient(
    90deg,
    var(--color-gray-0),
    var(--color-gray-200)
  );
  background-size: 300% 300%;

  animation: ${gradientAnimation} 2s linear infinite;
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

const LoadingImage = styled.div`
  height: 50%;
  width: 100%;
  border-radius: var(--border-radius-sm);
  margin-bottom: 1rem;

  background: linear-gradient(
    90deg,
    var(--color-gray-0),
    var(--color-gray-200)
  );
  background-size: 300% 300%;

  animation: ${gradientAnimation} 2s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  border-radius: var(--border-radius-sm);
  margin-bottom: 1rem;
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

      {isPending ? (
        <LoadingImage />
      ) : (
        <Image
          src={post.image ? post.image : "/default-cover-photo.png"}
          alt="Post Image"
        />
      )}

      <LikesContainer post_id={post.id} />

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
