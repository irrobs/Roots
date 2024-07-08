import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
};

const authenticationSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    typeEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    typePassword: (state, action: PayloadAction<{ password: string }>) => {
      state.password = action.payload.password;
    },
    resetState: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export default authenticationSlice.reducer;
export const { typeEmail, typePassword, resetState } =
  authenticationSlice.actions;
