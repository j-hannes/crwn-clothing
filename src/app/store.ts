import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "../features/cart/cart-slice";
import userReducer from "../features/user/user-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: [logger],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
