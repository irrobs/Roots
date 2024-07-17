import { useMutation, useQueryClient } from "@tanstack/react-query";
import { openChat as openChatApi } from "../../services/apiChat";
import { ChatType, ChatRenderType } from "../../types";

export function useOpenChat() {
  const queryClient = useQueryClient();
  const chatAmount =
    window.innerWidth <= 1280 ? (window.innerWidth <= 700 ? 1 : 2) : 3;

  const { mutate: openChat, isPending } = useMutation({
    mutationFn: ({ user1_id, user2_id }: ChatType) =>
      openChatApi({ user1_id, user2_id }),

    onSuccess: (data) => {
      const possibleNewChatId = data.id;
      const existingChats =
        queryClient.getQueryData<ChatRenderType[]>(["chats"]) || [];
      const existingChatsIds = existingChats.map((chat) => chat.id);

      if (
        !existingChatsIds.includes(possibleNewChatId) &&
        existingChatsIds.length < chatAmount
      ) {
        const updatedChats = [...existingChats, data];
        queryClient.setQueryData(["chats"], updatedChats);
      }
    },
  });

  return { openChat, isPending };
}
