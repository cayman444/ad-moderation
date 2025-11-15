import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  type AdChangeFilterParams,
  changeFilter,
  resetFilters,
} from '../model';

export const useAdFilters = () => {
  const dispatch = useAppDispatch();

  const { status, categoryId, price, search, sort } = useAppSelector(
    (state) => state.adFilters
  );

  const handleChangeFilter = useCallback(
    (filterParams: AdChangeFilterParams) => {
      dispatch(changeFilter(filterParams));
    },
    [dispatch]
  );

  const debouncedHandleFilter = useDebouncedCallback(handleChangeFilter, 500);

  const resetAllFilters = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  // Дополнительный запрос к api без параметров для получения всех категорий
  const { data: adsResponse, isFetching } = useGetAdsQuery({});

  return {
    status,
    categoryId,
    price,
    adsResponse,
    isFetching,
    search,
    sort,
    debouncedHandleFilter,
    handleChangeFilter,
    resetAllFilters,
  };
};
