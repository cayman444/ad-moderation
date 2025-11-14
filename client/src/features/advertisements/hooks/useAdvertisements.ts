import { useGetAdsQuery } from '@/shared/api/endpoints';
import { PAGE_SIZE } from '@/shared/constants';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import type { PaginationProps } from 'antd';
import { changeFilter } from '../model';

export const useAdvertisements = () => {
  const dispatch = useAppDispatch();

  const {
    status,
    categoryId,
    price: { minPrice, maxPrice },
    search,
    sort: { sortBy, sortOrder },
    page,
  } = useAppSelector((state) => state.adFilters);

  // Основной запрос к api с параметрами
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery({
    status,
    categoryId,
    minPrice,
    maxPrice,
    search,
    sortBy,
    sortOrder,
    page,
    limit: PAGE_SIZE,
  });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    dispatch(changeFilter({ filter: 'page', value: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    adsList: adsResponse?.ads,
    currentPage: adsResponse?.pagination.currentPage,
    totalItems: adsResponse?.pagination.totalItems,
    isFetching,
    isError,
    error,
    onChangePage,
  };
};
