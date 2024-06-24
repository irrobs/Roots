import styled, { css } from "styled-components";
import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5";
import Button from "./Button";
import useSignOut from "../features/authentication/SignOut/useSignOut";
import { Link } from "react-router-dom";

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

  ${({ $isHovered }) =>
    $isHovered
      ? css`
          transform: translateY(8rem);
        `
      : css`
          transform: translateY(-20%);
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
      <Link to="user">
        <Button variation="tertiary" size="small">
          <IoPersonOutline />
          Perfil
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
