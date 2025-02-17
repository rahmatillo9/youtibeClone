import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://yt-api.p.rapidapi.com",
    headers: {
      "x-rapidapi-key": "c11c982eeamsh361b1786d65b00bp1e8e38jsn2cf06757842f",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => "trending?geo=US",
    }),
    getVideoDetails: builder.query({
      query: (id) => `video/info?id=${id}`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetVideoDetailsQuery } = api;
