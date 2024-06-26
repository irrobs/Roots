import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  background-color: var(--color-gray-0);
  width: 2.4rem;
  height: 2.4rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: var(--color-lime-700);
  }

  &:checked::after {
    content: url("/checkmark.svg");
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-gray-700);
  cursor: pointer;
`;

export { CheckboxContainer, Checkbox, Label };
