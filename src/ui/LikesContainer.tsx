import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useCreateLike } from "../features/posts/useCreateLike";
import styled, { keyframes } from "styled-components";
import { useGetLikes } from "../features/posts/useGetLikes";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useDeleteLike } from "../features/posts/useDeleteLike";

const gradientAnimation = keyframes`
  0% {
    background-position: 150% 50%;
  }
  

  100% {
    background-position: 0% 50%;
  }
`;

const PostInfo = styled.div`
  display: flex;
  width: 100%;
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

const LoadingPostInfo = styled.div`
  display: flex;
  width: 100%;
  line-height: 1;

  background: linear-gradient(
    90deg,
    var(--color-gray-0),
    var(--color-gray-200)
  );
  background-size: 300% 300%;

  animation: ${gradientAnimation} 2s linear infinite;
`;

const Likes = styled.span`
  display: flex;
  gap: 0.5rem;

  & span {
    font-weight: lighter;
  }
`;

const LikeButton = styled.button`
  & > * {
    color: var(--color-red-600);
    fill: var(--color-red-600);
  }
`;

export default function LikesContainer({ post_id }: { post_id: number }) {
  const { createLike } = useCreateLike();
  const { deleteLike } = useDeleteLike();
  const { likes, isPending } = useGetLikes(post_id);
  const user = useGetCachedUser();

  if (isPending) return <LoadingPostInfo />;

  const likeAmount = likes ? likes.length : 0;

  const userLiked = likes
    ? likes.filter((like) => like.user_id === user.id)[0]
    : false;

  return (
    <PostInfo>
      <Likes>
        <strong>{likeAmount}</strong>
        <span>Curtidas</span>
      </Likes>

      <LikeButton>
        {userLiked ? (
          <IoHeart onClick={() => deleteLike({ user_id: user.id, post_id })} />
        ) : (
          <IoHeartOutline
            onClick={() => createLike({ user_id: user.id, post_id })}
          />
        )}
      </LikeButton>
    </PostInfo>
  );
}
