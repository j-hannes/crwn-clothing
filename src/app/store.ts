import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import cartReducer from "../features/cart/cart-slice";
import directoryReducer from "../features/directory/directory-slice";
import shopReducer from "../features/shop/shop-slice";
import userReducer from "../features/user/user-slice";
import { rootSaga } from "./saga";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart"],
};

const logger = createLogger({
  collapsed: true,
});

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    middleware.push(sagaMiddleware);
    if (process.env.NODE_ENV === "development") {
      middleware.push(logger);
    }
    return middleware;
  },
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
