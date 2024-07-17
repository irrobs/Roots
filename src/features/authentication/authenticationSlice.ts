import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isOpenedFriendList: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    typeEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    typePassword: (state, action: PayloadAction<{ password: string }>) => {
      state.password = action.payload.password;
    },
    toggleFriendList: (state) => {
      state.isOpenedFriendList = !state.isOpenedFriendList;
    },
    resetState: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export default authenticationSlice.reducer;
export const { typeEmail, typePassword, toggleFriendList, resetState } =
  authenticationSlice.actions;
