import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice" // un slice exemple

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
