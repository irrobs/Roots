import { IoHome, IoSettings, IoTrendingUp } from "react-icons/io5";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-lime-200);
  padding: 4rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color-lime-500);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & li {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: var(--color-lime-700);
    }
  }

  & li span {
    display: flex;
    align-items: center;
  }

  & li span > * {
    height: 3.2rem;
    width: 3.2rem;
  }
`;

const Copyright = styled.span`
  text-align: center;
  color: var(--color-gray-500);
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <nav>
        <NavItems>
          <li>
            <span>
              <IoHome />
            </span>{" "}
            Página Inicial
          </li>
          <li>
            <span>
              <IoTrendingUp />
            </span>{" "}
            Popular
          </li>
          <li>
            <span>
              <IoSettings />
            </span>{" "}
            Configurações
          </li>
        </NavItems>
      </nav>

      <Copyright>@2024 copyright - fasdfsafd</Copyright>
    </StyledSidebar>
  );
}
