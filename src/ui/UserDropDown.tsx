import styled, { css } from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "./Button";
import useSignOut from "../features/authentication/SignOut/useSignOut";

const StyledUserDropDown = styled.div<{ isHovered: boolean }>`
  position: absolute;
  z-index: 1;
  background-color: var(--color-lime-700);
  width: 22rem;
  transition: all 0.5s ease-out;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${({ isHovered }) =>
    isHovered
      ? css`
          transform: translateY(8rem);
        `
      : css`
          transform: translateY(-100%);
        `}
`;

export default function UserDropDown({ isHovered }) {
  const { signOut } = useSignOut();
  return (
    <StyledUserDropDown isHovered={isHovered}>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
      <Button variation="secondary" size="small" onClick={() => signOut()}>
        <IoLogOutOutline />
        Desconectar
      </Button>
    </StyledUserDropDown>
  );
}
