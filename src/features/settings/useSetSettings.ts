import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setSetting } from "../../services/apiUser";
import { SettingSendType } from "../../types";

export function useSetSettings() {
  const queryClient = useQueryClient();
  const { mutate: setSettings, isPending } = useMutation({
    mutationFn: ({ id, dark_mode, hide_visibility }: SettingSendType) =>
      setSetting({ id, dark_mode, hide_visibility }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-settings"] });
    },
  });

  return { setSettings, isPending };
}
