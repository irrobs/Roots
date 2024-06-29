import { IoHeartOutline } from "react-icons/io5";
import { useCreateLike } from "../features/posts/useCreateLike";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGetLikes } from "../features/posts/useGetLikes";
import { useEffect, useState } from "react";

const Likes = styled.span`
  display: flex;
  gap: 0.5rem;

  & span {
    font-weight: lighter;
  }
`;

const LikeButton = styled.button``;

export default function LikesContainer({ post_id }: { post_id: number }) {
  const { createLike } = useCreateLike();
  const { getLikes, isPending: isPendingGetLikes } = useGetLikes();
  const { user, isPending: isPendingUser } = useUser();

  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    getLikes(post_id, {
      onSuccess: (data) => {
        setLikes(data.length);
      },
    });
  }, [getLikes, post_id]);

  if (isPendingUser) return <p>Loading...</p>;

  return (
    <>
      <Likes>
        <strong>{isPendingGetLikes ? "Loading..." : likes}</strong>
        <span>Curtidas</span>
      </Likes>

      <LikeButton onClick={() => createLike({ user_id: user!.id, post_id })}>
        <IoHeartOutline />
      </LikeButton>
    </>
  );
}
