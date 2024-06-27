import { useMutation } from "@tanstack/react-query";
import { getComments as getCommentsApi } from "../../services/apiPosts";

export function useGetComments() {
  const { mutate: getComments, isPending } = useMutation({
    mutationFn: (id: number) => getCommentsApi(id),
  });

  return { getComments, isPending };
}
