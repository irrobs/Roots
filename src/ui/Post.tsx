import { IoSendOutline } from "react-icons/io5";
import styled from "styled-components";
import { useGetUserWithId } from "../features/user/useGetUserWithId";
import { useEffect, useState } from "react";
import { CommentRenderType, PostRenderType } from "../types";
import { formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useCreateComment } from "../features/posts/useCreateComment";
import toast from "react-hot-toast";
import { useGetComments } from "../features/posts/useGetComments";
import Comment from "../features/posts/Comment";

import LikesContainer from "./LikesContainer";

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

const CommentsContainer = styled.div`
  margin: 1rem 0;
`;

const NewCommentInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: 1px solid var(--color-gray-500);
  outline: none;
  width: 95%;
  padding: 0.5rem;
`;

const ButtonComment = styled(Button)`
  position: absolute;
  top: 0;
  right: 1rem;

  & > * {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default function Post({
  post,
  userId,
  userName,
}: {
  post: PostRenderType;
  userId: string;
  userName: string;
}) {
  const { getUserWithId, isPending } = useGetUserWithId();
  const { createComment, isPending: isPendingComment } = useCreateComment();
  const { getComments, isPending: isPendingGetComments } = useGetComments();

  const [postUser, setPostUser] = useState("");
  const [fullPost, setFullPost] = useState(
    post.text.length <= 200 ? true : false
  );
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentRenderType[]>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getUserWithId(post.user_id, {
      onSuccess: (data) => {
        setPostUser(data.user_metadata.name);
      },
    });

    getComments(post.id, {
      onSuccess: (data) => {
        setComments(data);
      },
    });
  }, [post.user_id, getUserWithId, post.id, setComments, getComments]);

  const {
    register,
    handleSubmit,
    /* formState: { errors }, */
  } = useForm();

  function onSubmitComment() {
    if (!userId || !userName)
      return toast.error("Comentário não pode ser criado");
    createComment(
      {
        user_id: userId,
        post_id: post.id,
        content: comment,
        user_name: userName,
      },
      {
        onSuccess: () => {
          setComment("");
        },
      }
    );
  }

  if (isPending) return <p>Loading...</p>;

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

      <p>
        {fullPost ? post.text : post.text.slice(0, 200)}
        {fullPost ? (
          post.text.length > 200 ? (
            <button onClick={() => setFullPost(!fullPost)}>...Ver menos</button>
          ) : null
        ) : (
          <button onClick={() => setFullPost(!fullPost)}>...Ver mais</button>
        )}
      </p>

      {showComments || comments.length === 0 ? null : (
        <ButtonSeeComments onClick={() => setShowComments(!showComments)}>
          Ver comentários...
        </ButtonSeeComments>
      )}
      {showComments ? (
        isPendingGetComments ? (
          <p>Loading comments</p>
        ) : (
          <CommentsContainer>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </CommentsContainer>
        )
      ) : null}

      <form
        onSubmit={handleSubmit(onSubmitComment)}
        style={{ position: "relative" }}
      >
        <NewCommentInput
          type="text"
          placeholder="Escreva um comentário"
          value={comment}
          {...register("comment", { required: true })}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
        />
        <ButtonComment
          type="submit"
          variation="tertiary"
          size="small"
          disabled={isPendingComment}
        >
          <IoSendOutline />
        </ButtonComment>
      </form>
    </StyledPost>
  );
}
