import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../services/apiAuth";


export default function useResetPasswordRedirect() {
    const {mutate:resetPassword, isPending} = useMutation({
        mutationFn: (password: string) => updateUserPassword(password),
        
    })

    return {resetPassword, isPending}
}