import { useQuery } from "@tanstack/react-query";
import { getFriends } from "../../services/apiUser";

export function useGetFriends(user_id: string) {
  const { data: friends, isPending } = useQuery({
    queryKey: [`user-${user_id}-friends`],
    queryFn: () => getFriends(user_id),
  });

  return { friends, isPending };
}
