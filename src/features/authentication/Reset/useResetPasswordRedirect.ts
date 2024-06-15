import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../../services/apiAuth";
import { useContext } from "react";
import { ModalContext } from "../../../ui/Modal";
import toast from "react-hot-toast";

export default function useResetPasswordRedirect() {
  const { close } = useContext(ModalContext);
  const { mutate: resetPasswordRedirect, isPending } = useMutation({
    mutationFn: (email: string) => resetPasswordApi(email),
    onSettled: () => {
      close();
      toast.success("Email de confirmação enviado!");
    },
    onError: () => {
      toast.error("Email não pode ser enviado");
    },
  });

  return { resetPasswordRedirect, isPending };
}
