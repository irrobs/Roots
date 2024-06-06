import styled from "styled-components";
import Modal from "../../ui/Modal";
import SignUpForm from "./SignUpForm";

const Button = styled.button`
  color: var(--color-gray-0);
  background-color: var(--color-lime-500);
  border: none;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
`;

export default function SignUp() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="sign-up-form">
          <Button>Cadastre-se</Button>
        </Modal.Open>
        <Modal.Window name="sign-up-form">
          <SignUpForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
