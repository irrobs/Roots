import styled, { css } from "styled-components";

const StyledSelect = styled.select<{ type: string }>`
  border: none;
  background-color: transparent;
  outline-color: var(--color-lime-700);
  color: var(--color-lime-700);

  ${(props) =>
    props.type === "green" &&
    css`
      background-color: var(--color-lime-500);
      color: var(--color-gray-0);
      padding: 0.2rem 1rem;
      border-radius: var(--border-radius-full);
      font-size: 1.4rem;
      align-self: flex-end;
    `}
`;

export default function Select({ options, type, ...props }) {
  return (
    <StyledSelect type={type} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </StyledSelect>
  );
}
