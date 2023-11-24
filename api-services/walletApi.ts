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
            ledgerBalance: formatNumber(res.ledger_balance, 2),
            pendingPayout: formatNumber(res.pending_payout, 2),
            totalPayout: formatNumber(res.total_payout, 2),
            totalRevenue: formatNumber(res.total_revenue, 2),
            balance: formatNumber(res.balance, 2),
          };
        }
      },
    }),
  }),
});

export const { useRetrieveWalletInfoQuery } = walletApi;
