import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type {
  ActivityDataList,
  Advertisement,
  AdvertisementModeratorParams,
  AdvertisementModeratorResponse,
  AdvertisementParams,
  AdvertisementResponse,
  CategoriesStats,
  DecisionsStats,
  StatsParams,
  SummaryStats,
} from '../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Ad', 'Stats'],
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
        page,
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
            page,
          },
        };
      },
      providesTags: ['Ad'],
    }),
    getAdDetails: build.query<Advertisement, string>({
      query: (id) => `/ads/${id}`,
      providesTags: ['Ad'],
    }),
    approveAd: build.mutation<AdvertisementModeratorResponse, number>({
      query: (id) => ({ url: `/ads/${id}/approve`, method: 'POST' }),
      invalidatesTags: ['Ad', 'Stats'],
    }),
    rejectAd: build.mutation<
      AdvertisementModeratorResponse,
      AdvertisementModeratorParams
    >({
      query: ({ id, ...body }) => ({
        url: `/ads/${id}/reject`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Ad', 'Stats'],
    }),
    requestChangesAd: build.mutation<
      AdvertisementModeratorResponse,
      AdvertisementModeratorParams
    >({
      query: ({ id, ...body }) => ({
        url: `/ads/${id}/request-changes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Ad', 'Stats'],
    }),
    getSummaryStats: build.query<SummaryStats, StatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/summary',
          params: {
            period,
          },
        };
      },
      providesTags: ['Stats'],
    }),
    getChartActivity: build.query<ActivityDataList, StatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/chart/activity',
          params: {
            period,
          },
        };
      },
      providesTags: ['Stats'],
    }),
    getDecisionsStats: build.query<DecisionsStats, StatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/chart/decisions',
          params: {
            period,
          },
        };
      },
      providesTags: ['Stats'],
    }),
    getCategoriesStats: build.query<CategoriesStats, StatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/chart/categories',
          params: {
            period,
          },
        };
      },
      providesTags: ['Stats'],
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdDetailsQuery,
  useApproveAdMutation,
  useRejectAdMutation,
  useRequestChangesAdMutation,
  useGetCategoriesStatsQuery,
  useGetSummaryStatsQuery,
  useGetChartActivityQuery,
  useGetDecisionsStatsQuery,
} = adsApi;
