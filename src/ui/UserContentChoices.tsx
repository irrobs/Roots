import styled from "styled-components";

const UserChoices = styled.ul`
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  color: var(--color-lime-500);
  font-size: 2.4rem;
  font-weight: bold;
`;

const UserChoice = styled.li`
  color: var(--color-lime-500);
  cursor: pointer;
  padding: 0 2rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  &:hover,
  &:active {
    color: var(--color-lime-700);
    border-color: var(--color-lime-700);
  }
`;

export default function UserContentChoices() {
  return (
    <UserChoices>
      <UserChoice>Posts</UserChoice>
      <UserChoice>Amigos</UserChoice>
    </UserChoices>
  );
}
