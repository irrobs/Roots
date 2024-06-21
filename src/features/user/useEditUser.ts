import { useMutation } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/apiUser";
import { UserType } from "../../types";

export function useEditUser() {
  const { mutate: edit, isPending } = useMutation({
    mutationFn: ({ name, description, profilePicture, coverPhoto }: UserType) =>
      editUserApi({
        name,
        description,
        profilePicture,
        coverPhoto,
      }),
  });

  return { edit, isPending };
}
