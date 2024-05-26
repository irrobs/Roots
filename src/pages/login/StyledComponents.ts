import styled from "styled-components";

export const StyledFormContainer = styled.div`
  background-color: var(--color-lime-200);
  padding: 2rem 4rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-md);
`;

export const StyledForm = styled.form`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledInputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: var(--color-gray-0);
  color: var(--color-gray-500);
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  width: 100%;
  outline-color: var(--color-lime-500);
`;

export const StyledSpan = styled.span`
  display: inline-block;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  & > * {
    width: 100%;
    height: 100%;
    stroke: var(--color-gray-600);
  }
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
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

export const StyledButton = styled.button<{ primary?: boolean }>`
  text-transform: ${(props) => (props.primary ? "uppercase" : "capitalize")};
  color: var(--color-gray-0);
  background-color: var(--color-lime-500);
  border: none;
  font-weight: bold;
  font-size: 1.6rem;
  border-radius: ${(props) =>
    props.primary ? "var(--border-radius-full)" : "var(--border-radius-md)"};
  width: 100%;
  padding: 1rem 0;

  &:hover {
    background-color: var(--color-lime-700);
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  color: var(--color-gray-700);
  cursor: pointer;
`;

export const StyledFooter = styled.footer`
  background-color: var(--color-lime-200);
  width: 100vw;
  padding: 1rem 0;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  color: var(--color-gray-500);
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: transparent;
  outline-color: var(--color-lime-700);
  color: var(--color-lime-700);
`;

export const StyledLink = styled.a`
  color: var(--color-gray-500);
`;
