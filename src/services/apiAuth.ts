import { LoginData, UserData } from "../types";
import supabase from "./supabase";

export async function signUp({ email, password, name }: UserData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        description: "",
        profilePicture: "",
        coverPhoto: "",
        status: "offline",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: LoginData) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { data: dataUpdated, error: errorUpdateUser } =
    await supabase.auth.updateUser({
      data: {
        status: "online",
      },
    });

  if (errorUpdateUser) throw new Error(errorUpdateUser.message);

  return dataUpdated;
}

//gets user from localStore from supabase auth token
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  //re-fetching the data instead of getting it of session because it' more secure
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

export async function signOut() {
  const { error: errorUpdateUser } = await supabase.auth.updateUser({
    data: {
      status: "offline",
    },
  });

  if (errorUpdateUser) throw new Error(errorUpdateUser.message);

  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/resetPassword",
  });

  return { data, error };
}

export async function updateUserPassword(newPassword: string) {
  await supabase.auth.updateUser({
    password: newPassword,
  });
}
