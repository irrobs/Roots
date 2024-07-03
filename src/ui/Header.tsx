import styled from "styled-components";
import UserCard from "./UserCard";
import Logo from "./Logo";
import Navigation from "./HeaderNavigation";
import UserDropDown from "./UserDropDown";
import { useState } from "react";
import Searchbar from "./Searchbar";

const StyledHeader = styled.header`
  grid-column: 1/ -1;
  background-color: var(--color-lime-500);
  padding: 1rem;
  display: grid;
  grid-template-columns: calc(20vw - 1rem) 1fr min-content auto;
  align-items: center;
  gap: 3rem;
  position: relative;
  z-index: 5;
`;

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <StyledHeader>
        <Logo variation="header" />

        <Searchbar />

        <Navigation />

        <UserCard onSetIsHovered={setIsHovered} />
      </StyledHeader>
      <UserDropDown isHovered={isHovered} onSetIsHovered={setIsHovered} />
    </>
  );
}
