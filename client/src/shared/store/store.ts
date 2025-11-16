import { adFiltersReducer } from '@/features/advertisements/model';
import { moderatorStatsReducer } from '@/features/moderator-stats/model';
import { configureStore } from '@reduxjs/toolkit';
import { adsApi, statsApi } from '../api/endpoints';

export const store = configureStore({
  reducer: {
    adFilters: adFiltersReducer,
    moderatorStats: moderatorStatsReducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware, statsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
