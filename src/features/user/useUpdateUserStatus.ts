import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserStatus as updateUserStatusApi } from "../../services/apiAuth";

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();
  const { mutate: updateStatus, isPending } = useMutation({
    mutationFn: (status: string) => updateUserStatusApi(status),

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  return { updateStatus, isPending };
}
