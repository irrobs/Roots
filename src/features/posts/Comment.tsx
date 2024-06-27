import styled from "styled-components";
import { CommentRenderType } from "../../types";

const StyledComment = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CommenterName = styled.span`
  color: var(--color-gray-900);
  font-weight: 700;
`;

export default function Comment({ comment }: { comment: CommentRenderType }) {
  return (
    <StyledComment>
      <CommenterName>{comment.user_name}</CommenterName>
      {comment.content}
    </StyledComment>
  );
}
