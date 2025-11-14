import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AdChangeFilterParams, AdFiltersState } from './ad-filters-types';

const initialState: AdFiltersState = {
  status: [],
};

export const adFiltersSlice = createSlice({
  name: 'ad-filters',
  initialState,
  reducers: {
    changeFilter: (
      state,
      { payload: { filter, value } }: PayloadAction<AdChangeFilterParams>
    ) => {
      if (filter === 'categoryId' && typeof value === 'number') {
        state.categoryId = value;
      }

      if (filter === 'status' && Array.isArray(value)) {
        state.status = value;
      }
    },
  },
});

export const { changeFilter } = adFiltersSlice.actions;

export default adFiltersSlice.reducer;
