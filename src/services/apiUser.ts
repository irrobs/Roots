import { UserType } from "../types";
import supabase from "./supabase";

export async function editUser({
  name,
  description,
  profilePicture,
  coverPhoto,
}: UserType) {
  await supabase.auth.updateUser({
    data: {
      name,
      description,
      profilePicture,
      coverPhoto,
    },
  });
}
