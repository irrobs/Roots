import supabase from "./supabase";
import { ChatType } from "../types";

export async function openChat({ user1_id, user2_id }: ChatType) {
  const { data, error } = await supabase
    .from("chat")
    .select("*")
    .or(
      `and(user1_id.eq.${user1_id},user2_id.eq.${user2_id}),and(user1_id.eq.${user2_id},user1_id.eq.${user1_id})`
    );

  if (error) throw new Error(error.message);

  if (data.length === 0) {
    const { data: insertData, error: errorInsert } = await supabase
      .from("chat")
      .insert({ user1_id, user2_id })
      .select("*")
      .single();

    if (errorInsert) throw new Error(errorInsert.message);

    return insertData; // Return the newly created chat data
  } else {
    return data[0]; // Return the existing chat data
  }
}
