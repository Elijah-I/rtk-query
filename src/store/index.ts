import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api";

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
