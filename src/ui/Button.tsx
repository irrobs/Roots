import styled, { css } from "styled-components";

type VariationType = "primary" | "secondary";
type SizeType = "small" | "medium" | "full";

const variation = {
  primary: css`
    text-transform: uppercase;
    border-radius: var(--border-radius-full);
    font-weight: bold;
  `,
  secondary: css`
    text-transform: capitalize;
    border-radius: var(--border-radius-md);
  `,
};

const size = {
  small: css`
    width: fit-content;
  `,
  medium: css`
    width: 50%;
  `,
  full: css`
    width: 100%;
  `,
};

interface ButtonProps {
  variation?: VariationType;
  size?: SizeType;
}

const Button = styled.button<ButtonProps>`
  color: var(--color-gray-0);
  background-color: var(--color-lime-500);
  border: none;
  font-size: 1.6rem;
  padding: 1rem 0;

  &:hover {
    background-color: var(--color-lime-700);
  }

  ${(props) => size[props.size ?? "full"]}
  ${(props) => variation[props.variation ?? "primary"]}
`;

export default Button;
