import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';

export const useAdvertisements = () => {
  const {
    status,
    categoryId,
    price: { minPrice, maxPrice },
    search,
  } = useAppSelector((state) => state.adFilters);

  // Основной запрос к api с параметрами
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery({ status, categoryId, minPrice, maxPrice, search });

  return { adsResponse, isFetching, isError, error };
};
