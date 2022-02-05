import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    userRegistered(state, action) {
      state.currentUser = action.payload;
    },
    userUnregistered(state) {
      state.currentUser = null;
    },
  },
});

export const { userRegistered, userUnregistered } = userSlice.actions;
export default userSlice.reducer;
