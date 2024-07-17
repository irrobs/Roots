import styled, { css } from "styled-components";

type StyledMessageProps = {
  side: string;
};

const StyledMessage = styled.div<StyledMessageProps>`
  max-width: 25ch;
  border: 1px solid var(--color-gray-200);
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-lime-500);
  color: var(--color-gray-0);
  margin-right: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap; // Add this line
  ${(props) => {
    if (props.side === "right") {
      return css`
        background-color: var(--color-lime-700);

        border: 1px solid transparent;
        margin-left: auto;
        margin-right: 0;
      `;
    }
  }}
`;

export default function Message({
  side,
  content,
}: {
  side: string;
  content: string;
}) {
  return (
    <StyledMessage side={side}>
      <span>{content}</span>
    </StyledMessage>
  );
}
