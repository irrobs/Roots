import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const UserChoices = styled.ul`
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  color: var(--color-lime-500);
`;

const UserChoice = styled.button<{ isActive: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--color-lime-500);
  cursor: pointer;
  padding: 0 2rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    color: var(--color-lime-700);
    border-color: var(--color-lime-700);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--color-lime-700);
      border-color: var(--color-lime-700);
    `}
`;

export default function UserContentChoices() {
  const [searchParams, setSearchParams] = useSearchParams();
  const choice = searchParams.get("choice") || "";
  const [active, setActive] = useState(choice);

  function handleSearchParams(choice: string) {
    searchParams.set("choice", choice);
    setSearchParams(searchParams);
    setActive(choice);
  }

  return (
    <UserChoices>
      <li>
        <UserChoice
          isActive={active === "posts"}
          onClick={() => handleSearchParams("posts")}
        >
          Posts
        </UserChoice>
      </li>
      <li>
        <UserChoice
          isActive={active === "friends"}
          onClick={() => handleSearchParams("friends")}
        >
          Amigos
        </UserChoice>
      </li>
    </UserChoices>
  );
}
