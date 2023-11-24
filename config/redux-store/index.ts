import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../../api-services/userApi";
import { walletApi } from "../../api-services/walletApi";
import { transactionsApi } from "../../api-services/transactionsApi";

export const reduxStore = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat([
      userApi.middleware,
      walletApi.middleware,
      transactionsApi.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
