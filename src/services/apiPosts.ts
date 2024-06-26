import supabase from "./supabase";
import { PostType } from "../types";

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
