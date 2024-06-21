export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  password: string;
  name: string;
}

export interface UserType {
  name?: string;
  description?: string;
  profilePicture: File | null;
  coverPhoto: File | null;
}
