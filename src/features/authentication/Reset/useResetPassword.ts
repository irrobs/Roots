import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { resetState } from "../authenticationSlice";

export default function useResetPasswordRedirect() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: (password: string) => updateUserPassword(password),

    onSuccess: () => {
      dispatch(resetState());
      navigate("/login", { replace: true });
    },
  });

  return { resetPassword, isPending };
}
