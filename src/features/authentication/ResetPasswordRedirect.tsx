import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ResetPasswordRedirectForm from "./ResetPasswordRedirectForm";


export default function ResetPasswordRedirect() {
  return (
    <Modal>
      <Modal.Open opens="reset-password-redirect-form">
        <Button variation="secondary">Esqueceu sua senha?</Button>
      </Modal.Open>
      <Modal.Window name="reset-password-redirect-form">
        <ResetPasswordRedirectForm/>
      </Modal.Window>
    </Modal>
  );
}
