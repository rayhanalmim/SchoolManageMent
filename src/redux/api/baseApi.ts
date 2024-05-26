import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://softy-edu-server.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getHeaderData: builder.query({
      query: (key) => `/header/get-data?key=${key}`,
    }),
    getFooterData: builder.query({
      query: (key) => `/footer/get-data?key=${key}`,
    }),
  }),
});

export const { useGetHeaderDataQuery, useGetFooterDataQuery } = baseApi;
