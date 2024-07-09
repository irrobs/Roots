import supabase from "./supabase";
import { ChatType, MessageSendType } from "../types";
/* 
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
 */
export async function openChat({ user1_id, user2_id }: ChatType) {
  // Ensure UUIDs are consistently ordered for comparison
  const [uuid1, uuid2] = [user1_id, user2_id].sort();

  const { data, error } = await supabase
    .from("chat")
    .select("*")
    .eq("user1_id", uuid1)
    .eq("user2_id", uuid2);

  if (error) throw new Error(error.message);

  if (data.length === 0) {
    const { data: insertData, error: errorInsert } = await supabase
      .from("chat")
      .insert({ user1_id: uuid1, user2_id: uuid2 })
      .select("*")
      .single();

    if (errorInsert) throw new Error(errorInsert.message);

    return insertData; // Return the newly created chat data
  }

  return data[0]; // Return the existing chat data
}

export async function sendMessage({
  content,
  sender_id,
  conversation_id,
}: MessageSendType) {
  const { data, error } = await supabase
    .from("messages")
    .insert({ content, sender_id, conversation_id })
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getMessages(id: string) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", id);

  if (error) throw new Error(error.message);

  return data;
}
