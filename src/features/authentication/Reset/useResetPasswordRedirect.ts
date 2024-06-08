import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../../services/apiAuth";


export default function useResetPasswordRedirect() {
    const {mutate:resetPasswordRedirect, isPending} = useMutation({
        mutationFn: (email: string) => resetPasswordApi(email),
        
    })

    return {resetPasswordRedirect, isPending}
}