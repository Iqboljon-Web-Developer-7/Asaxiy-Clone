import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import PermanentData from "./slices/permanentData";

export const store = configureStore({
  reducer: {
    PermanentData,
    [api.reducerPath]: api.reducer, // caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
