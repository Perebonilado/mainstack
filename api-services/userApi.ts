import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiTimeOutInMs, getEnvironmentVariable } from "../constants";
import { UserModel } from "../models/UserModel";
import { UserDTO } from "../dto/userdto";
import { concatFirstLetterOfEachWord } from "../utils";

const { baseUrl } = getEnvironmentVariable();

export const userApi = createApi({
  reducerPath: "user_api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: apiTimeOutInMs,
  }),
  tagTypes: ["user_info"],
  endpoints: (build) => ({
    retrieveUserInfo: build.query<UserModel, unknown>({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["user_info"],
      transformResponse: (res: UserDTO) => {
        if (!res) return {} as UserModel;
        else {
          return <UserModel>{
            email: res.email,
            firstName: res.first_name,
            lastName: res.last_name,
            abbreviation: concatFirstLetterOfEachWord(
              `${res.last_name} ${res.first_name}`
            ),
          };
        }
      },
    }),
  }),
});

export const { useRetrieveUserInfoQuery } = userApi;
