import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import UserCard from "./UserCard";
import Logo from "./Logo";
import Navigation from "./HeaderNavigation";
import UserDropDown from "./UserDropDown";
import { useState } from "react";

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

const StyledSearchbar = styled.div`
  width: 100%;
  position: relative;
  color: var(--color-gray-600);
`;

const InputSearch = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 3.6rem;
  padding: 2rem;
  border-radius: var(--border-radius-full);
  border: none;
  outline-color: var(--color-lime-700);
  color: var(--color-gray-500);
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-40%);
`;

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <StyledHeader>
        <Logo type="" />

        <StyledSearchbar>
          <InputSearch placeholder="Pesquisar..." />
          <Icon>
            <IoSearchOutline />
          </Icon>
        </StyledSearchbar>

        <Navigation />

        <UserCard onSetIsHovered={setIsHovered} />
      </StyledHeader>
      <UserDropDown isHovered={isHovered} onSetIsHovered={setIsHovered} />
    </>
  );
}
