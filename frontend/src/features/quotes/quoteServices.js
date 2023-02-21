import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    tagTypes: ["Quotes"],
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Content-Type", "application/json");
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getAllQuotes: builder.query({
      query: () => ({
        url: "/api/quote",
        method: "GET",
      }),
      providesTags: ["Quotes"]
    }),

    createQuote: builder.mutation({
      query: (data) => ({
        url: "/api/quote",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quotes"]
    }),

    deleteQuote: builder.mutation({
        query: (id) => ({
            url:`/api/quote/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ["Quotes"]
    })
  }),
});

export const { useGetAllQuotesQuery, useCreateQuoteMutation, useDeleteQuoteMutation } = quotesApi;
