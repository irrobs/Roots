import { UserSendType } from "../types";
import supabase, { supabaseUrl } from "./supabase";

export async function editUser({
  name,
  description,
  profilePicture,
  coverPhoto,
}: UserSendType) {
  //1: update name and description
  const { data, error } = await supabase.auth.updateUser({
    data: {
      name,
      description,
    },
  });

  if (error) throw new Error(error.message);

  if (!profilePicture && !coverPhoto) return data;

  //2: upload images and update user
  if (profilePicture) {
    const fileName = `avatar-${data.user.id}`;

    const { error: storageError } = await supabase.storage
      .from("Profile-pictures")
      .upload(fileName, profilePicture, { upsert: true });

    if (storageError) throw new Error(storageError.message);

    //cache busting so the image gets refetched to display in screen
    const timestamp = new Date().getTime();
    const profilePictureUrl = `${supabaseUrl}/storage/v1/object/public/Profile-pictures/${fileName}?timestamp=${timestamp}`;

    await supabase.auth.updateUser({
      data: {
        profilePicture: profilePictureUrl,
      },
    });
  }

  if (coverPhoto) {
    const fileName = `cover-${data.user.id}`;

    const { error: storageError } = await supabase.storage
      .from("Cover-photos")
      .upload(fileName, coverPhoto, { upsert: true });

    if (storageError) throw new Error(storageError.message);

    await supabase.auth.updateUser({
      data: {
        coverPhoto: `${supabaseUrl}/storage/v1/object/public/Cover-photos/${fileName}`,
      },
    });
  }
}

export async function getUserWithId(id: string) {
  const { data, error } = await supabase.auth.admin.getUserById(id);

  if (error) throw new Error(error.message);

  return data.user;
}
