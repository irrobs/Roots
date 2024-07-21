import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PostType } from "../../types";
import { createPost as createPostApi } from "../../services/apiPosts";
import { useContext } from "react";
import { ModalContext } from "../../ui/Modal";

export function useCreatPost() {
  const { close } = useContext(ModalContext);
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: ({ postText, postImage, userId }: PostType) =>
      createPostApi({ postText, postImage, userId }),

    onSuccess: () => {
      toast.success("Post criado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      close();
    },

    onError: () => {
      toast.error("Falha na criação da publicação");
    },
  });

  return { createPost, isPending };
}
