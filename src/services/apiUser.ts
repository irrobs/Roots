import { User } from "@supabase/supabase-js";
import { FriendSendType, SettingSendType, UserSendType } from "../types";
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

export async function getUserWithId(id: string): Promise<User> {
  const { data, error } = await supabase.auth.admin.getUserById(id);

  if (error) throw new Error(error.message);

  return data.user;
}

export async function getUsers() {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) throw new Error(error.message);

  return users;
}

export async function createFriendship({ user_id, friend_id }: FriendSendType) {
  const { data, error } = await supabase
    .from("friend_list")
    .insert({ user_id, friend_id });

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteFriendship({ user_id, friend_id }: FriendSendType) {
  const { data, error } = await supabase
    .from("friend_list")
    .delete()
    .eq("user_id", user_id)
    .eq("friend_id", friend_id);

  if (error) throw new Error(error.message);

  return data;
}

//get the relationships were users followed you
export async function getFollowers(user_id: string) {
  const { data, error } = await supabase
    .from("friend_list")
    .select()
    .eq("friend_id", user_id);

  if (error) throw new Error(error.message);

  return data;
}

//get the relationships were you followed a user
export async function getFollowings(user_id: string) {
  const { data, error } = await supabase
    .from("friend_list")
    .select()
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);

  return data;
}

export async function setSetting({
  id,
  dark_mode,
  hide_visibility,
}: SettingSendType) {
  const { data, error } = await supabase
    .from("user_setting")
    .select()
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  if (!data) {
    const { error } = await supabase
      .from("user_setting")
      .insert({ id, dark_mode, hide_visibility });

    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase
      .from("user_setting")
      .update({ dark_mode, hide_visibility })
      .eq("id", id);
    if (error) throw new Error(error.message);
  }
}

export async function getSettings(id: string) {
  const { data, error } = await supabase
    .from("user_setting")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
