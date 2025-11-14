import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AdChangeFilterParams, AdFiltersState } from './ad-filters-types';

const initialState: AdFiltersState = {
  status: [],
  price: { maxPrice: null, minPrice: null },
};

export const adFiltersSlice = createSlice({
  name: 'ad-filters',
  initialState,
  reducers: {
    changeFilter: (
      state,
      {
        payload: { filter, value, typePrice },
      }: PayloadAction<AdChangeFilterParams>
    ) => {
      if (
        filter === 'categoryId' &&
        (typeof value === 'number' || typeof value === 'undefined')
      ) {
        state.categoryId = value;
      }

      if (filter === 'status' && Array.isArray(value)) {
        state.status = value;
      }

      if (
        filter === 'price' &&
        typePrice === 'minPrice' &&
        (typeof value === 'number' || value === null)
      ) {
        state.price.minPrice = value;
      }

      if (
        filter === 'price' &&
        typePrice === 'maxPrice' &&
        (typeof value === 'number' || value === null)
      ) {
        state.price.maxPrice = value;
      }

      if (
        filter === 'search' &&
        (typeof value === 'string' || typeof value === 'undefined')
      ) {
        state.search = value;
      }
    },
    resetFilters: (state) => {
      state.categoryId = undefined;
      state.price = { maxPrice: null, minPrice: null };
      state.search = undefined;
      state.status = [];
    },
  },
});

export const { changeFilter, resetFilters } = adFiltersSlice.actions;

export default adFiltersSlice.reducer;
