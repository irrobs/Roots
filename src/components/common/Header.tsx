import {
  IoBookmark,
  IoChatbubbleEllipses,
  IoEllipse,
  IoNotifications,
  IoSearchOutline,
} from "react-icons/io5";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-lime-500);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 6rem;
  }

  & > p {
    text-transform: uppercase;
    color: var(--color-lime-700);
    font-weight: bold;
    font-size: 3.6rem;
  }
`;

const StyledSearchbar = styled.div`
  margin-left: auto;
  width: 40vw;
  position: relative;
  color: var(--color-gray-600);
`;

const InputSearch = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 3.6rem;
  padding: 2rem;
  border-radius: var(--border-radius-full);
  border: none;
  outline: none;
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

const HeaderNav = styled.nav`
  margin-left: auto;
  & > ul {
    display: flex;
    gap: 1rem;
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
const UserCard = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  color: var(--color-gray-0);
  font-size: 2rem;

  & span {
    font-weight: lighter;
    font-size: 1.6rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: auto;

    & span {
      color: var(--color-red-600);
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src="/logo.png" alt="Desenho de uma árvore" />
        <p>Roots</p>
      </StyledLogo>

      <StyledSearchbar>
        <InputSearch placeholder="Pesquisar..." />
        <Icon>
          <IoSearchOutline />
        </Icon>
      </StyledSearchbar>

      <HeaderNav>
        <ul>
          <li>
            <NavLink href="#">
              <IoChatbubbleEllipses />
            </NavLink>
          </li>
          <li>
            <NavLink href="#">
              <IoBookmark />
            </NavLink>
          </li>
          <li>
            <NavLink href="#">
              <IoNotifications />
            </NavLink>
          </li>
        </ul>
      </HeaderNav>

      <UserCard>
        <div>
          <p>Joelson Santana</p>
          <span>
            <span>
              <IoEllipse />
            </span>{" "}
            ocupado
          </span>
        </div>
        <img src="/logo.png" alt="User profile photo" />
      </UserCard>
    </StyledHeader>
  );
}
