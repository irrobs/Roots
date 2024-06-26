import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getPosts as getPostsApi } from "../../services/apiPosts";

export function useGetPosts() {
  const queryClient = useQueryClient();
  const { mutate: getPosts, isPending } = useMutation({
    mutationFn: getPostsApi,

    onSuccess: (data) => {
      queryClient.setQueryData(["posts"], data);
    },

    onError: () => {
      toast.error("Falha ao carregar publicações");
    },
  });

  return { getPosts, isPending };
}
