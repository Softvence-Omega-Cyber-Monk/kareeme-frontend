import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./hooks/baseApi";
import authReducer from "@/redux/features/auth/authSlice";
import cartReducer from "@/redux/features/cart/cartSlice"
import {
  persistReducer,
  persistStore,
  PERSIST,
  REHYDRATE,
  PAUSE,
  FLUSH,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config for authentication
// Only persist user data (non-sensitive), NOT tokens
const authConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items", "totalQuantity", "totalPrice"],
}
const persistedReducer = persistReducer(authConfig, authReducer);
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, PAUSE, FLUSH, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
