import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { type AdChangeFilterParams, changeFilter } from '../model';

export const useAdFilters = () => {
  const dispatch = useAppDispatch();

  const { status, categoryId, price } = useAppSelector(
    (state) => state.adFilters
  );

  const handleChangeFilter = (filterParams: AdChangeFilterParams) => {
    dispatch(changeFilter(filterParams));
  };

  // Дополнительный запрос к api без параметров для получения всех категорий
  const { data: adsResponse, isFetching } = useGetAdsQuery({});

  return {
    status,
    categoryId,
    price,
    adsResponse,
    isFetching,
    handleChangeFilter,
  };
};
