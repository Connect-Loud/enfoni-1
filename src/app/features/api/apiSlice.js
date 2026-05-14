import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL ?? (() => {
  const host = window.location.hostname;
  if (host.endsWith(".enfonigh.com")) return `https://${host}/api/v1`;
  return "https://knust.enfonigh.com/api/v1";
})();

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.results?.token
      || localStorage.getItem("auth-token");
    if (token) headers.set("auth-token", token);
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({}),
});
