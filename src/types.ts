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
  id: string;
  name: string;
  description?: string;
  profilePicture: File | null;
  coverPhoto: File | null;
};

export interface PartialCachedUser {
  id: string;
  user_metadata: {
    name: string;
    coverPhoto: string;
    profilePicture: string;
    description: string;
  };
}

export type UserSendType = {
  name: string;
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

export type CommentRenderType = {
  id: number;
  user_id: string;
  post_id: number;
  content: string;
  user_name: string;
};
export type CommentSendType = {
  user_id: string;
  post_id: number;
  content: string;
  user_name: string;
};

export type LikeType = {
  user_id: string;
  post_id: number;
};

export type FriendSendType = {
  user_id: string;
  friend_id: string;
};
