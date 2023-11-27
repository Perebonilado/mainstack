import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";
import { WalletModel } from "../models/WalletModel";
import { WalletDto } from "../dto/walletdto";
import { formatNumber } from "../utils";

const { baseUrl } = getEnvironmentVariable();

export const walletApi = createApi({
  reducerPath: "wallet_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  endpoints: (build) => ({
    retrieveWalletInfo: build.query<WalletModel, unknown>({
      query: () => ({
        url: "/wallet",
      }),
      transformResponse: (res: WalletDto) => {
        if (!res) return {} as WalletModel;
        else {
          return <WalletModel>{
            ledgerBalance: {
              amount: formatNumber(res.ledger_balance, 2),
              label: "Ledger Balance",
            },
            pendingPayout: {
              amount: formatNumber(res.pending_payout, 2),
              label: "Pending Payout",
            },
            totalPayout: {
              amount: formatNumber(res.total_payout, 2),
              label: "Total Payout",
            },
            totalRevenue: {
              amount: formatNumber(res.total_revenue, 2),
              label: "Total Revenue",
            },
            balance: { amount: formatNumber(res.balance, 2), label: "Balance" },
          };
        }
      },
    }),
  }),
});

export const { useRetrieveWalletInfoQuery } = walletApi;
