import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import type { CategoriesStats, CategoriesStatsParams } from '../types';

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
  }),
});

export const { useGetCategoriesStatsQuery } = statsApi;
