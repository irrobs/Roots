import { useQuery } from "@tanstack/react-query";
import { ChatRenderType } from "../../types";

export function useGetChats() {
  const { data: chats, isPending } = useQuery<ChatRenderType[]>({
    queryKey: ["chats"],
  });

  return { chats, isPending };
}
