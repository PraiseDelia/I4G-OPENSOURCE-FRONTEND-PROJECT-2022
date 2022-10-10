import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import apiConnection from "./apiConnection";

const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [apiConnection.reducerPath]: apiConnection.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiConnection.middleware),
});
export default store;
