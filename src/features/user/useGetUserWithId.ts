import { useQuery } from "@tanstack/react-query";
import { User } from "@supabase/supabase-js";
import { getUserWithId } from "../../services/apiUser";

export function useGetUserWithId(id: string) {
  const { data: user, isPending } = useQuery<User>({
    queryKey: [`user-${id}`],
    queryFn: () => getUserWithId(id),
    enabled: !!id,
  });
  return { user, isPending };
}
