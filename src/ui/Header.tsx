import styled from "styled-components";
import UserCard from "./UserCard";
import Logo from "./Logo";
import UserDropDown from "./UserDropDown";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { IoChatbubbles } from "react-icons/io5";
import { toggleFriendList } from "../features/authentication/authenticationSlice";
import { useAppDispatch } from "../store";

const StyledHeader = styled.header`
  grid-column: 1/ -1;
  background-color: var(--color-lime-500);
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 5;
`;

const ChatsButton = styled.button`
  background: none;
  border: none;
  width: 3.6rem;
  height: 3.6rem;

  & > * {
    width: 100%;
    height: 100%;
    color: var(--color-lime-700);
    transition: all 0.2s linear;

    &:hover {
      color: var(--color-lime-200);
    }
  }
`;

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const viewportWidth = window.innerWidth;
  return (
    <>
      <StyledHeader>
        <Link to="/main">
          <Logo variation="header" />
        </Link>

        <Searchbar />

        {viewportWidth <= 900 ? (
          <ChatsButton onClick={() => dispatch(toggleFriendList())}>
            <IoChatbubbles />
          </ChatsButton>
        ) : (
          <UserCard onSetIsHovered={setIsHovered} />
        )}
      </StyledHeader>
      <UserDropDown isHovered={isHovered} onSetIsHovered={setIsHovered} />
    </>
  );
}
