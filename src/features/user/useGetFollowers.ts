import { useQuery } from "@tanstack/react-query";
import { FriendshipType } from "../../types";
import { getFollowers } from "../../services/apiUser";

export function useGetFollowers(user_id: string) {
  const { data: followers, isPending } = useQuery<FriendshipType[]>({
    queryKey: [`user-${user_id}-followers`],
    queryFn: () => getFollowers(user_id),
  });

  return { followers, isPending };
}
