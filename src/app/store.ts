import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../features/cart/cart-slice";
import directoryReducer from "../features/directory/directory-slice";
import userReducer from "../features/user/user-slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
