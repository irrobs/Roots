import {
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useAppDispatch } from "../store";
import { resetState } from "../features/authentication/authenticationSlice";
import { device } from "../styles/breakpoints";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-lime-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  @media ${device.smallTablet} {
    padding: 1.6rem 2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-lime-500-1);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-50%, 50%);
  font-size: 3.6rem;
  background-color: inherit;
  border: none;
  color: var(--color-lime-700);
  transition: all 0.3s;
  height: 3.6rem;
  width: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-red-600);
  }
`;

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

interface ModalProps {
  children: ReactElement;
}

interface OpenProps extends ModalProps {
  opens: string;
}

interface WindowProps extends ModalProps {
  name: string;
}

const ModalContext = createContext<ModalContextType>({
  openName: "",
  close: () => {},
  open: () => {},
});

export default function Modal({ children }: ModalProps) {
  //controls the component that will be opened with the modal
  const dispatch = useAppDispatch();
  const [openName, setOpenName] = useState("");

  const close = () => {
    setOpenName("");
    dispatch(resetState());
  };
  const open = (name: string) => {
    setOpenName(name);
  };

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

//component that opens the modal
function Open({ children, opens }: OpenProps) {
  const { open } = useContext(ModalContext);

  //creates a clone of the choosen element with the choosen props
  return cloneElement(children, { onClick: () => open(opens) });
}

//actual modal window
function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);

  //allows closingthe modal with click in overlay
  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name != openName) return null;

  //puts the modal as a sibling of body
  return createPortal(
    <Overlay>
      <StyledModal ref={ref} role="dialog">
        <Button onClick={close}>
          <IoCloseOutline />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export { ModalContext };
