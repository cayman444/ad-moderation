import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { isSummaryStatsPeriod } from './moderator-stats-guards';
import type { moderatorStatsState } from './moderator-stats-types';

const initialState: moderatorStatsState = { periodAd: 'today' };

export const moderatorStatsSlice = createSlice({
  name: 'moderator-stats',
  initialState,
  reducers: {
    changePeriodAd: (state, { payload }: PayloadAction<string>) => {
      if (isSummaryStatsPeriod(payload)) {
        state.periodAd = payload;
      }
    },
  },
});

export const { changePeriodAd } = moderatorStatsSlice.actions;

export default moderatorStatsSlice.reducer;
