import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { useCallback } from 'react';
import { type AdChangeFilterParams, changeFilter } from '../model';

export const useAdFilters = () => {
  const dispatch = useAppDispatch();

  const { status, categoryId, price, search } = useAppSelector(
    (state) => state.adFilters
  );

  const handleChangeFilter = useCallback(
    (filterParams: AdChangeFilterParams) => {
      dispatch(changeFilter(filterParams));
    },
    [dispatch]
  );

  // Дополнительный запрос к api без параметров для получения всех категорий
  const { data: adsResponse, isFetching } = useGetAdsQuery({});

  return {
    status,
    categoryId,
    price,
    adsResponse,
    isFetching,
    search,
    handleChangeFilter,
  };
};
