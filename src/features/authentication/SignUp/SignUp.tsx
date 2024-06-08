import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <Modal>
      <Modal.Open opens="sign-up-form">
        <Button variation="secondary">Cadastre-se</Button>
      </Modal.Open>
      <Modal.Window name="sign-up-form">
        <SignUpForm />
      </Modal.Window>
    </Modal>
  );
}
