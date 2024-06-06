import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;
const Button = styled.button`
  font-size: 2rem;
`;

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

interface ModalProps {
  children: ReactNode;
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

const ModalContext = createContext<ModalContextType>({
  openName: "",
  close: () => {},
  open: () => {},
});

export default function Modal({ children }: ModalProps) {
  //controls the component that will be opened with the modal
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
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
  //const ref = useOutsideClick(close);

  if (name != openName) return null;

  //puts the modal as a sibling of body
  return createPortal(
    <Overlay onClick={close}>
      <StyledModal>
        <Button onClick={close}>
          <IoCloseCircleOutline />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
