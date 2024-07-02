import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useCreateLike } from "../features/posts/useCreateLike";
import styled from "styled-components";
import { useGetLikes } from "../features/posts/useGetLikes";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useDeleteLike } from "../features/posts/useDeleteLike";

const Likes = styled.span`
  display: flex;
  gap: 0.5rem;

  & span {
    font-weight: lighter;
  }
`;

const LikeButton = styled.button`
  & > * {
    fill: var(--color-red-600);
  }
`;

export default function LikesContainer({ post_id }: { post_id: number }) {
  const { createLike } = useCreateLike();
  const { deleteLike } = useDeleteLike();
  const { likes, isPending } = useGetLikes(post_id);
  const user = useGetCachedUser();

  if (isPending) return <p>Loading...</p>;

  const likeAmount = likes ? likes.length : 0;

  const userLiked = likes
    ? likes.filter((like) => like.user_id === user.id)[0]
    : false;

  return (
    <>
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
    </>
  );
}
