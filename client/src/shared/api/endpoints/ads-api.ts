import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAds: build.query({
      query: () => `/ads`,
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
