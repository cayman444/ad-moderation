import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type {
  ActivityDataList,
  CategoriesStats,
  CategoriesStatsParams,
  SummaryStats,
  SummaryStatsParams,
} from '../types';

export const statsApi = createApi({
  reducerPath: 'statsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCategoriesStats: build.query<
      CategoriesStats,
      Partial<CategoriesStatsParams>
    >({
      query: () => '/stats/chart/categories',
    }),
    getSummaryStats: build.query<SummaryStats, SummaryStatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/summary',
          params: {
            period,
          },
        };
      },
    }),
    getChartActivity: build.query<ActivityDataList, SummaryStatsParams>({
      query: ({ period }) => {
        return {
          url: '/stats/chart/activity',
          params: {
            period,
          },
        };
      },
    }),
  }),
});

export const {
  useGetCategoriesStatsQuery,
  useGetSummaryStatsQuery,
  useGetChartActivityQuery,
} = statsApi;
