import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";
import { TransactionModel } from "../models/TransactionModel";
import { TransactionDto } from "../dto/transactiondto";
import { formatDateMONTHDDYYY } from "../utils";

const { baseUrl } = getEnvironmentVariable();

export const transactionsApi = createApi({
  reducerPath: "transactions_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  tagTypes: ["transactions"],
  endpoints: (build) => ({
    retrieveAllTransactions: build.query<TransactionModel[], unknown>({
      query: () => ({
        url: "/transactions",
      }),
      providesTags: ["transactions"],
      transformResponse: (res: TransactionDto[]) => {
        if (!res) return [] as TransactionModel[];
        else {
          return <TransactionModel[]>res.map((tx) => {
            return {
              date: formatDateMONTHDDYYY(tx.date),
              description: tx?.metadata?.type || "Cash withdrawal",
              name: tx?.metadata?.name,
              status: tx.status,
              type: tx.type,
              amount: tx.amount,
            };
          });
        }
      },
    }),
  }),
});

export const { useRetrieveAllTransactionsQuery } = transactionsApi;
