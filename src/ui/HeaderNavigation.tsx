import {
  IoBookmark,
  IoChatbubbleEllipses,
  IoNotifications,
} from "react-icons/io5";

import styled from "styled-components";

const StyledNavigation = styled.nav``;

const NavItems = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  transition: color 0.3s;

  &:hover {
    color: var(--color-lime-700);
  }
`;

const NavLink = styled.a`
  display: inline-block;
  width: 3.6rem;
  height: 3.6rem;

  & > * {
    width: 100%;
    height: 100%;
    fill: var(--color-lime-200);
    transition: fill 0.3s;
    &:hover {
      fill: var(--color-lime-700);
    }
  }
`;

export default function HeaderNavigation() {
  return (
    <StyledNavigation>
      <NavItems>
        <NavItem>
          <NavLink href="#">
            <IoChatbubbleEllipses />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IoBookmark />
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IoNotifications />
          </NavLink>
        </NavItem>
      </NavItems>
    </StyledNavigation>
  );
}
