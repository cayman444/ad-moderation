import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type { AdvertisementParams, AdvertisementResponse } from '../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAds: build.query<AdvertisementResponse, Partial<AdvertisementParams>>({
      query: ({
        categoryId,
        status,
        minPrice,
        maxPrice,
        search,
        sortBy,
        sortOrder,
      }) => {
        const searchParams = new URLSearchParams();

        if (status) {
          status.forEach((value) => {
            searchParams.append('status', value);
          });
        }

        const queryString = searchParams.toString();

        return {
          url: `/ads${queryString ? '?' + queryString : ''}`,
          params: {
            minPrice: minPrice ?? undefined,
            maxPrice: maxPrice ?? undefined,
            sortBy: sortBy ?? undefined,
            sortOrder: sortOrder ?? undefined,
            categoryId,
            search,
          },
        };
      },
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
