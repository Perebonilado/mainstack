import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";

const { baseUrl } = getEnvironmentVariable();

export const userApi = createApi({
  reducerPath: "user_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  endpoints: (build) => ({
    retrieveUserInfo: build.query({
      query: () => ({
        url: "/user",
      }),
    }),
  }),
});

export const { useRetrieveUserInfoQuery } = userApi;
