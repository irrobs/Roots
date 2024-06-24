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
