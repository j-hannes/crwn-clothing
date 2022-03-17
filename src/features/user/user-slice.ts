import { createAction, createSlice } from "@reduxjs/toolkit";

// import { EmailAuthCredential, User } from "firebase/auth";
// TODO user has id or not?
import { User } from "./types";

export const googleSignIn = {
  pending: createAction("user/googleSignIn.pending"),
};

export type EmailAndPassword = {
  email: string;
  password: string;
};

export const emailSignIn = {
  pending: createAction<EmailAndPassword>("user/emailSignIn.pending"),
};

export const signIn = {
  fulfilled: createAction<User>("user/emailSignIn.fulfilled"),
  rejected: createAction<string>("user/emailSignIn.rejected"),
};

export const checkUserSession = createAction("user/checkUserSession");

interface UserState {
  currentUser: User | null;
  errorMessage?: string;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // userRegistered(draft, action: PayloadAction<User>) {
    //   draft.currentUser = action.payload;
    //   draft.errorMessage = initialState.errorMessage;
    // },
    // userUnregistered(draft) {
    //   draft.currentUser = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (draft, action) => {
      draft.currentUser = action.payload;
      draft.errorMessage = initialState.errorMessage;
    });
    builder.addCase(signIn.rejected, (draft, action) => {
      draft.errorMessage = action.payload;
    });
  },
});

// export const { userRegistered, userUnregistered } = userSlice.actions;
export default userSlice.reducer;
