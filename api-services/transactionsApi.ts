import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";

const { baseUrl } = getEnvironmentVariable();

export const transactionsApi = createApi({
  reducerPath: "transactions_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  endpoints: (build) => ({
    retrieveAllTransactions: build.query({
      query: () => ({
        url: "/transactions",
      }),
    }),
  }),
});

export const { useRetrieveAllTransactionsQuery } = transactionsApi;
