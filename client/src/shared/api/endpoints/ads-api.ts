import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type { AdvertisementResponse } from '../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAds: build.query<AdvertisementResponse, null>({
      query: () => `/ads`,
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
