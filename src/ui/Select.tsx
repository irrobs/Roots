import styled from "styled-components";

const StyledSelect = styled.select`
  margin-top: 1rem;
  margin-right: 5rem;
  background-color: var(--color-lime-500);
  color: var(--color-gray-0);
  padding: 0.2rem 1rem;
  border-radius: var(--border-radius-full);
  font-size: 1.4rem;
  align-self: flex-end;
  border: none;
  outline-color: var(--color-lime-700);
`;

export default function Select() {
  return (
    <StyledSelect>
      <option value="1">A - Z</option>
      <option value="2">Z - A</option>
    </StyledSelect>
  );
}
