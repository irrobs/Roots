import supabase from "./supabase";

type userType = {
  email: string;
  password: string;
  name?: string;
};

export async function signUp({ email, password, name }: userType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: userType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

//gets user from localStore from supabase auth token
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  //re-fetching the data instead of getting it of session because it' more secure
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function resetPassword(email:string){
  const { data, error } = await supabase.auth.resetPasswordForEmail(email,{
    redirectTo: "http://localhost:5173/resetPassword"
  })

  return {data,error}
}

export async function updateUserPassword(newPassword){
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  })
}