import styled, { css } from "styled-components";

type VariationsType = "sort" | "language";

type SelectProps = {
  variation?: VariationsType;
};

const variation = {
  sort: css`
    background-color: var(--color-lime-500);
    color: var(--color-gray-0);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-full);
    font-size: 1.6rem;
    margin-left: auto;
  `,
  language: css`
    font-size: 1.8rem;
  `,
};

const Select = styled.select<SelectProps>`
  border: none;
  background-color: transparent;
  outline-offset: 0;
  color: var(--color-lime-700);
  text-align: center;

  ${(props) => variation[props.variation ?? "sort"]}
`;

export default Select;
