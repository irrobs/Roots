import styled, { css } from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "./Button";
import useSignOut from "../features/authentication/SignOut/useSignOut";

const StyledUserDropDown = styled.ul<{ isHovered: boolean }>`
  position: absolute;
  z-index: 1;
  background-color: var(--color-lime-200);
  width: 22rem;
  transition: all 0.5s ease-out;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0 0 0 var(--border-radius-md);

  ${({ isHovered }) =>
    isHovered
      ? css`
          transform: translateY(8rem);
        `
      : css`
          transform: translateY(-20%);
        `}
`;

export default function UserDropDown({ isHovered, onSetIsHovered }) {
  const { signOut } = useSignOut();
  return (
    <StyledUserDropDown
      isHovered={isHovered}
      onMouseEnter={() => onSetIsHovered(true)}
      onMouseLeave={() => onSetIsHovered(false)}
    >
      <li>
        <Button variation="tertiary" size="small" onClick={() => signOut()}>
          <IoLogOutOutline />
          Desconectar
        </Button>
      </li>
    </StyledUserDropDown>
  );
}
