import { useQuery } from "@tanstack/react-query";
import { getLoggedUserFriends } from "../../services/apiUser";
import { FriendshipType } from "../../types";

export function useGetLoggedUserFriends(user_id: string) {
  const { data: friends, isPending } = useQuery<FriendshipType[]>({
    queryKey: [`user-${user_id}-friends`],
    queryFn: () => getLoggedUserFriends(user_id),
  });

  return { friends, isPending };
}
