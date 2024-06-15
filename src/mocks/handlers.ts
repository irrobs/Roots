import { http, HttpResponse } from "msw";
import { supabaseUrl } from "../services/supabase";

export const handlers = [
  http.get(`${supabaseUrl}/auth/v1/user`, () => {
    return HttpResponse.json({ email: "teste@test.com", password: "testtest" });
  }),
];
