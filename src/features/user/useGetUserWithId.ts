import { useMutation } from "@tanstack/react-query";
import { getUserWithId as getUserWithIdApi } from "../../services/apiUser";

export function useGetUserWithId() {
  const { mutate: getUserWithId, isPending } = useMutation({
    mutationFn: (id) => getUserWithIdApi(id),
  });
  return { getUserWithId, isPending };
}
