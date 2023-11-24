import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";

const { baseUrl } = getEnvironmentVariable();

export const walletApi = createApi({
  reducerPath: "wallet_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  endpoints: (build) => ({
    retrieveWalletInfo: build.query({
      query: () => ({
        url: "/wallet",
      }),
    }),
  }),
});


export const { useRetrieveWalletInfoQuery } = walletApi