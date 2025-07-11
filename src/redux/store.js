import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apicall";
import authReducer from "./reducers/appReducer"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
