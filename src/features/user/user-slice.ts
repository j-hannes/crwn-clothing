import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    userRegistered(draft, action: PayloadAction<User>) {
      draft.currentUser = action.payload;
    },
    userUnregistered(draft) {
      draft.currentUser = null;
    },
  },
});

export const { userRegistered, userUnregistered } = userSlice.actions;
export default userSlice.reducer;
