import styled from "styled-components";
import { IoHome, IoSettings, IoTrendingUp } from "react-icons/io5";

const StyledNavigation = styled.nav``;

const NavItems = styled.ul`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: color 0.3s;
  color: var(--color-lime-500);
  &:hover {
    color: var(--color-lime-700);
  }

  & > * {
    height: 3.2rem;
    width: 3.2rem;
  }
`;

export default function SidebarNavigation() {
  return (
    <StyledNavigation>
      <NavItems>
        <NavItem>
          <NavLink href="#">
            <IoHome /> Página inicial
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IoTrendingUp /> Populares
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <IoSettings /> Configurações
          </NavLink>
        </NavItem>
      </NavItems>
    </StyledNavigation>
  );
}
