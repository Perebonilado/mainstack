import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";
import { TransactionModel } from "../models/TransactionModel";
import { TransactionDto } from "../dto/transactiondto";

const { baseUrl } = getEnvironmentVariable();

export const transactionsApi = createApi({
  reducerPath: "transactions_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  endpoints: (build) => ({
    retrieveAllTransactions: build.query<TransactionModel[], unknown>({
      query: () => ({
        url: "/transactions",
      }),
      transformResponse: (res: TransactionDto[]) => {
        if (!res) return [] as TransactionModel[];
        else {
          return <TransactionModel[]>res.map((tx) => {
            return {
              date: tx.date,
              description: tx.metadata.type,
              name: tx.metadata.name,
              status: tx.status,
              type: tx.type,
            };
          });
        }
      },
    }),
  }),
});

export const { useRetrieveAllTransactionsQuery } = transactionsApi;
