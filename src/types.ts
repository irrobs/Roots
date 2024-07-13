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
    status: "offline" | "online";
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

export type FriendshipType = {
  user_id: string;
  friend_id: string;
  created_at: Date;
};

export type ChatType = {
  user1_id: string;
  user2_id: string;
};

export type ChatRenderType = {
  id: string;
  user1_id: string;
  user2_id: string;
  created_at: Date;
};

export type MessageSendType = {
  content: string;
  sender_id: string;
  conversation_id: string;
};

export type MessageRenderType = {
  id: number;
  content: string;
  sender_id: string;
  conversation_id: string;
};

export type SettingSendType = {
  id: string;
  dark_mode: boolean;
  hide_visibility: boolean;
};
