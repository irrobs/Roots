import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ofwpftbzznmixatxvqbv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9md3BmdGJ6em5taXhhdHh2cWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0OTQ1MTIsImV4cCI6MjAzMjA3MDUxMn0.bOu3sWiBFlwIAbIF6RJFjUL1e1wdJZHHuMl21Dkl12w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
