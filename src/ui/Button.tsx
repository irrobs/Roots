import styled, { css } from "styled-components";

type VariationType = "primary" | "secondary" | "tertiary";
type SizeType = "small" | "medium" | "full";

const variation = {
  primary: css`
    text-transform: uppercase;
    border-radius: var(--border-radius-full);
    font-weight: bold;

    &:hover {
      background-color: var(--color-lime-700);
    }
  `,
  secondary: css`
    border-radius: var(--border-radius-md);

    &:hover {
      background-color: var(--color-lime-700);
    }
  `,
  tertiary: css`
    text-transform: capitalize;
    padding: 0.5rem 0;
    background: none;
    color: var(--color-lime-700);
    transition: all 0.3s;

    & > * {
      width: 2.4rem;
      height: 2.4rem;
    }

    &:hover {
      color: var(--color-lime-500);
      gap: 1.5rem;
    }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  ${(props) => size[props.size ?? "full"]}
  ${(props) => variation[props.variation ?? "primary"]}
`;

export default Button;
