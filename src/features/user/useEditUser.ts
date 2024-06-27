import { useMutation } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/apiUser";
import { UserSendType } from "../../types";

export function useEditUser() {
  const { mutate: edit, isPending } = useMutation({
    mutationFn: ({
      name,
      description,
      profilePicture,
      coverPhoto,
    }: UserSendType) =>
      editUserApi({
        name,
        description,
        profilePicture,
        coverPhoto,
      }),
  });

  return { edit, isPending };
}
