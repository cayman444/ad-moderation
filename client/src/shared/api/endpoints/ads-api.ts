import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type { AdvertisementParams, AdvertisementResponse } from '../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAds: build.query<AdvertisementResponse, Partial<AdvertisementParams>>({
      query: ({ categoryId, status }) => {
        const searchParams = new URLSearchParams();

        if (status) {
          status.forEach((value) => {
            searchParams.append('status', value);
          });
        }

        if (categoryId) {
          searchParams.append('categoryId', categoryId.toString());
        }

        const queryString = searchParams.toString();

        return {
          url: `/ads?${queryString}`,
        };
      },
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
