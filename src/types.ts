export type LoginData = {
  email: string;
  password: string;
};

export type UserData = {
  email: string;
  password: string;
  name: string;
};

export type UserType = {
  name?: string;
  description?: string;
  profilePicture: File | null;
  coverPhoto: File | null;
};

export type PostType = {
  postText: string;
  postImage: File | null;
  userId: string;
};

export type PostRenderType = {
  id: number;
  created_at: Date;
  text: string;
  image: string | null;
  user_id: string;
};

export type CommentType = {
  user_id: string;
  post_id: number;
  content: string;
};
