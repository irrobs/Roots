import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage as sendMessageApi } from "../../services/apiChat";
import { MessageSendType } from "../../types";

export function useSendMessage() {
  const queryClient = useQueryClient();
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: ({ content, sender_id, conversation_id }: MessageSendType) =>
      sendMessageApi({
        content,
        sender_id,
        conversation_id,
      }),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [`messages-chat-${data[0].conversation_id}`],
      });
    },
  });

  return { sendMessage, isPending };
}
