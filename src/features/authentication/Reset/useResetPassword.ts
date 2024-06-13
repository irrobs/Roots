import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useResetPasswordRedirect() {
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: (password: string) => updateUserPassword(password),

    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });

  return { resetPassword, isPending };
}
