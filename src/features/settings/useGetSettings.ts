import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiUser";

export function useGetSettings(id: string) {
  const { data: settings, isPending } = useQuery({
    queryKey: [`user-${id}-settings`],
    queryFn: () => getSettings(id),
  });

  return { settings, isPending };
}
