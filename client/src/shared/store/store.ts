import { adFiltersReducer } from '@/features/advertisements/model';
import { moderatorStatsReducer } from '@/features/moderator-stats/model';
import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from '../api/endpoints';

export const store = configureStore({
  reducer: {
    adFilters: adFiltersReducer,
    moderatorStats: moderatorStatsReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
