import { useMutation, useQueryClient } from "@tanstack/react-query";
import { openChat as openChatApi } from "../../services/apiChat";
import { ChatType, ChatRenderType } from "../../types";
import { useState, useEffect } from "react";

export function useOpenChat() {
  const queryClient = useQueryClient();
  const [chats, setChats] = useState<ChatRenderType[]>([]);

  const { mutate: openChat, isPending } = useMutation({
    mutationFn: ({ user1_id, user2_id }: ChatType) =>
      openChatApi({ user1_id, user2_id }),

    onSuccess: (data) => {
      const possibleNewChatId = data.id;
      const existingChats =
        queryClient.getQueryData<ChatRenderType[]>(["chats"]) || [];
      const existingChatsIds = existingChats.map((chat) => chat.id);
      let updatedChats;
      existingChatsIds.includes(possibleNewChatId)
        ? (updatedChats = [existingChats])
        : (updatedChats = [...existingChats, data]);

      queryClient.setQueryData(["chats"], updatedChats);
    },
  });

  const queriedChats = queryClient.getQueryData(["chats"]);

  useEffect(() => {
    const updatedChats =
      queryClient.getQueryData<ChatRenderType[]>(["chats"]) || [];
    setChats(updatedChats);
  }, [queryClient, queriedChats]); // Dependency array with query data

  return { openChat, isPending, chats };
}
