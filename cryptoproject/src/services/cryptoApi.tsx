import create from "@ant-design/icons/lib/components/IconFont";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  headers: {
    "X-RapidAPI-Key": "ceddb783aemshde67f66689feb94p172f8bjsna999a6544747",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

// const options = {
//   method: "GET",
//   url: "",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     limit: "50",
//     offset: "0",
//     orderBy: "24hVolume",
//     orderDirection: "desc",
//   },
//
// };
