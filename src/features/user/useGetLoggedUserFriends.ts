import { useQuery } from "@tanstack/react-query";
import { getLoggedUserFriends } from "../../services/apiUser";

export function useGetLoggedUserFriends(user_id: string) {
  const { data: friends, isPending } = useQuery({
    queryKey: [`user-${user_id}-friends`],
    queryFn: () => getLoggedUserFriends(user_id),
  });

  return { friends, isPending };
}
