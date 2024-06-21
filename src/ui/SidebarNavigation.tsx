import styled from "styled-components";
import { IoHome, IoSettings, IoTrendingUp } from "react-icons/io5";
import { Link } from "react-router-dom";

const StyledNavigation = styled.nav``;

const NavItems = styled.ul`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
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
          <NavLink to="/main">
            <IoHome /> Página inicial
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="#">
            <IoTrendingUp /> Populares
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="#">
            <IoSettings /> Configurações
          </NavLink>
        </NavItem>
      </NavItems>
    </StyledNavigation>
  );
}
