import { useCallback, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useCreateComment } from "./useCreateComment";
import { useGetComments } from "./useGetComments";
import { PostRenderType } from "../../types";
import Button from "../../ui/Button";
import Comment from "./Comment";
import { IoSendOutline } from "react-icons/io5";
import { useGetCachedUser } from "../authentication/useGetCachedUser";

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

const NewCommentInput = styled.input`
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

export default function Comments({ post }: { post: PostRenderType }) {
  const user = useGetCachedUser();
  const userData = user.user_metadata;

  const { createComment, isPending: isPendingComment } = useCreateComment();
  const { comments, isPending: isPendingGetComments } = useGetComments(post.id);

  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const inputRef = useRef(null);

  const { register, handleSubmit } = useForm();

  const onSubmitComment = useCallback(
    function () {
      if (!user.id || !userData.name)
        return toast.error("Comentário não pode ser criado");

      createComment(
        {
          user_id: user.id,
          post_id: post.id,
          content: comment,
          user_name: userData.name,
        },
        {
          onSuccess: () => {
            setComment("");
            setShowComments(true);
          },
        }
      );
    },
    [
      comment,
      createComment,
      setComment,
      setShowComments,
      post.id,
      user.id,
      userData.name,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "Enter" &&
        document.activeElement === inputRef.current
      ) {
        event.preventDefault(); // Prevent default form submission
        onSubmitComment();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmitComment]);

  return (
    <>
      {showComments || comments?.length === 0 ? null : (
        <ButtonSeeComments onClick={() => setShowComments(!showComments)}>
          Ver comentários...
        </ButtonSeeComments>
      )}
      {showComments ? (
        isPendingGetComments ? (
          <p>Loading comments</p>
        ) : (
          <CommentsContainer>
            {/* Since the button to show comment will only appear if there are comment, comments will never be undefined here */}
            {comments!.map((comment) => (
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
          ref={inputRef}
          autoComplete="off"
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
    </>
  );
}
