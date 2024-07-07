import { useQuery } from "@tanstack/react-query";
import { FriendshipType } from "../../types";
import { getFollowings } from "../../services/apiUser";

export function useGetFollowings(user_id: string) {
  const { data: followings, isPending } = useQuery<FriendshipType[]>({
    queryKey: [`user-${user_id}-followings`],
    queryFn: () => getFollowings(user_id),
  });

  return { followings, isPending };
}
