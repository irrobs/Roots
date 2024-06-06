import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import styled from "styled-components";

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

const ModalContext = createContext<ModalContextType>({
  openName: "",
  close,
  open,
});

export function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

//component that opens the modal
function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  //create a element to open the modal with a onClick prop
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  // const ref = useOutsideClick(close);

  if (name != openName) return null;
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={close}>
          <IoCloseCircleOutline />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;
