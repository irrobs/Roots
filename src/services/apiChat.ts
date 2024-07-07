import { ChatType } from "../types";
import supabase from "./supabase";

export async function openChat({ user1_id, user2_id }: ChatType) {
  const { error } = await supabase.from("chat").insert({ user1_id, user2_id });

  if (error) throw new Error(error.message);
}
