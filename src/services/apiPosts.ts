import supabase from "./supabase";
import { CommentSendType, LikeType, PostType } from "../types";

export async function createPost({ postText, postImage, userId }: PostType) {
  let newPost;
  //in case there is a image
  if (postImage) {
    //upload image to bucket
    const fileName = `${userId}-${Math.random()}`;
    const { data: dataFromUpload, error: storageError } = await supabase.storage
      .from("Posts")
      .upload(fileName, postImage);

    if (storageError) throw new Error(storageError.message);

    //get image from bucket
    const { data } = supabase.storage
      .from("Posts")
      .getPublicUrl(dataFromUpload.path);

    //send data to supabase
    newPost = {
      text: postText,
      image: data.publicUrl,
      user_id: userId,
    };
  } else {
    newPost = {
      text: postText,
      user_id: userId,
    };
  }

  const { error } = await supabase.from("post").insert(newPost);

  if (error) throw new Error(error.message);
}

export async function getPosts() {
  const { data, error } = await supabase.from("post").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function createComment({
  user_id,
  post_id,
  content,
  user_name,
}: CommentSendType) {
  const { error } = await supabase
    .from("comment")
    .insert({ user_id, post_id, content, user_name });

  if (error) throw new Error(error.message);
}

export async function getComments(id: number) {
  const { data, error } = await supabase
    .from("comment")
    .select()
    .eq("post_id", id);

  if (error) throw new Error(error.message);

  return data;
}

export async function createLike({ user_id, post_id }: LikeType) {
  const { data, error } = await supabase
    .from("like_table")
    .insert({ user_id, post_id })
    .select();

  if (error) throw new Error(error.message);

  return { data, post_id };
}

export async function deleteLike({ user_id, post_id }: LikeType) {
  const { error } = await supabase
    .from("like_table")
    .delete()
    .eq("user_id", user_id)
    .eq("post_id", post_id);

  if (error) throw new Error(error.message);

  return post_id;
}

export async function getLikes(post_id: number) {
  const { data, error } = await supabase
    .from("like_table")
    .select("user_id")
    .eq("post_id", post_id);

  if (error) throw new Error(error.message);

  return { data };
}
