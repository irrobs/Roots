import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  background-color: var(--color-gray-0);
  color: var(--color-gray-500);
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  width: 100%;
  outline-color: var(--color-lime-500);
`;

export default function TextInput({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}
