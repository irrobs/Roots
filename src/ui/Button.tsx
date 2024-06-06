import styled, { css } from "styled-components";

const StyledButton = styled.button<{ category: string }>`
  color: var(--color-gray-0);
  background-color: var(--color-lime-500);
  border: none;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;

  ${(props) =>
    props.category === "primary" &&
    css`
      text-transform: uppercase;
      border-radius: var(--border-radius-full);
      font-weight: bold;
    `};

  ${(props) =>
    props.category === "secondary" &&
    css`
      text-transform: capitalize;
      border-radius: var(--border-radius-md);
    `};

  &:hover {
    background-color: var(--color-lime-700);
  }
`;

interface ButtonProps {
  category: string;
  type: string;
  children: string;
  disabled?: boolean;
}

export default function Button({
  category,
  type,
  children,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton category={category} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
