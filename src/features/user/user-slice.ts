import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

import { auth, createUserProfileDocument } from ":app/firebase.utils";
import { clearCart } from ":features/cart/cart-slice";

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

export type SignUpValues = {
  displayName: string;
  email: string;
  password: string;
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (
    { displayName, email, password }: SignUpValues,
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      dispatch(checkUserSession());
    } catch (e: any) {
      // TODO can we check if it's a "SerializedError"?
      return rejectWithValue(e.message as string);
    }
  }
);

export const signOut = createAsyncThunk(
  "user/signOut",
  async (_, { dispatch }) => {
    try {
      await firebaseSignOut(auth);
      dispatch(clearCart());
    } catch (e: any) {
      return e.message as string;
    }
  }
);

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
    builder.addCase(signOut.fulfilled, (draft, action) => {
      draft.currentUser = null;
      draft.errorMessage = initialState.errorMessage;
    });
    builder.addCase(signOut.rejected, (draft, action) => {
      if (action.payload) {
        draft.errorMessage = action.payload as string;
      }
    });
  },
});

// export const { userRegistered, userUnregistered } = userSlice.actions;
export default userSlice.reducer;
