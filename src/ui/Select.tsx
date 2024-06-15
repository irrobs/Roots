import styled, { css } from "styled-components";

type VariationsType = "green";

type SelectProps = {
  variation?: VariationsType;
};

const variation = {
  green: css``,
};

const Select = styled.select<SelectProps>`
  border: none;
  background-color: transparent;
  outline-offset: 0;
  color: var(--color-lime-700);

  ${(props) => variation[props.variation ?? "green"]}
`;

export default Select;
