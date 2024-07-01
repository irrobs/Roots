import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useCreateLike } from "../features/posts/useCreateLike";
import styled from "styled-components";
import { useGetLikes } from "../features/posts/useGetLikes";
import { useEffect, useState } from "react";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";

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
  const { getLikes, isPending: isPendingGetLikes } = useGetLikes();
  const user = useGetCachedUser();

  const [likes, setLikes] = useState<[] | { user_id: string }[]>([]);

  useEffect(() => {
    getLikes(post_id, {
      onSuccess: (data) => {
        setLikes(data);
      },
    });
  }, [getLikes, post_id]);

  if (isPendingGetLikes) return <p>Loading...</p>;

  const likeAmount = likes.length;

  const userLiked =
    likes.filter((like) => like.user_id === user.id)[0] === undefined
      ? false
      : true;
  console.log(userLiked);

  return (
    <>
      <Likes>
        <strong>{likeAmount}</strong>
        <span>Curtidas</span>
      </Likes>

      <LikeButton onClick={() => createLike({ user_id: user.id, post_id })}>
        {userLiked ? <IoHeart /> : <IoHeartOutline />}
      </LikeButton>
    </>
  );
}
