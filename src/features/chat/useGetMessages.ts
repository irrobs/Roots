import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/apiChat";

export function useGetMessages(id: string) {
  const { data: messages, isPending } = useQuery({
    queryKey: [`messages-chat-${id}`],
    queryFn: () => getMessages(id),
  });

  return { messages, isPending };
}
