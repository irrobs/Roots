import styled, { css } from "styled-components";

type StyledMessageProps = {
  number: number;
};

const StyledMessage = styled.div<StyledMessageProps>`
  max-width: 70%;
  border: 1px solid var(--color-gray-200);
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-lime-500);
  color: var(--color-gray-0);
  ${(props) => {
    if (props.number % 2 === 0) {
      return css`
        background-color: var(--color-lime-700);

        border: 1px solid transparent;
        margin-left: auto;
      `;
    }
  }}
`;

export default function Message({ number }: { number: number }) {
  return (
    <StyledMessage number={number}>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quos
        omnis molestiass
      </span>
    </StyledMessage>
  );
}
