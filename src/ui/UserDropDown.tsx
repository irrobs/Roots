import styled, { css } from "styled-components";
import {
  IoHomeOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Button from "./Button";
import useSignOut from "../features/authentication/SignOut/useSignOut";
import { Link } from "react-router-dom";
import { device } from "../styles/breakpoints";

const StyledUserDropDown = styled.ul<{ $isHovered: boolean }>`
  position: absolute;
  z-index: 1;
  background-color: var(--color-lime-200);
  width: 22rem;
  transition: all 0.8s ease-out;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0 0 0 var(--border-radius-md);

  @media ${device.smallTablet} {
    top: 100%;
    flex-direction: row;
    width: 100%;
    transform: translateY(-100%);
    justify-content: space-around;
    border-radius: var(--border-radius-full) var(--border-radius-full) 0 0;
  }

  ${({ $isHovered }) =>
    $isHovered
      ? css`
          transform: translateY(8rem);
        `
      : css`
          transform: translateY(-60%);
        `}
`;

interface DropDownType {
  isHovered: boolean;
  onSetIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserDropDown({
  isHovered,
  onSetIsHovered,
}: DropDownType) {
  const { signOut } = useSignOut();
  return (
    <StyledUserDropDown
      $isHovered={isHovered}
      onMouseEnter={() => onSetIsHovered(true)}
      onMouseLeave={() => onSetIsHovered(false)}
    >
      <Link to="main">
        <Button variation="tertiary" size="small">
          <IoHomeOutline />
          Inicial
        </Button>
      </Link>
      <Link to="user">
        <Button variation="tertiary" size="small">
          <IoPersonOutline />
          Perfil
        </Button>
      </Link>

      <Link to="settings">
        <Button variation="tertiary" size="small">
          <IoSettingsOutline />
          Configurações
        </Button>
      </Link>
      <li>
        <Button variation="tertiary" size="small" onClick={() => signOut()}>
          <IoLogOutOutline />
          Desconectar
        </Button>
      </li>
    </StyledUserDropDown>
  );
}
