import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ofwpftbzznmixatxvqbv.supabase.co";

const supabaseServiceKey = import.meta.env.VITE_REACT_APP_SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default supabase;
