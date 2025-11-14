import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import { AdFilters } from './AdFilters';
import { AdList } from './AdList';

export const Advertisements = () => {
  const {
    status,
    categoryId,
    price: { minPrice, maxPrice },
  } = useAppSelector((state) => state.adFilters);

  // Основной запрос к api с параметрами
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery({ status, categoryId, minPrice, maxPrice });

  return (
    <>
      <AdFilters />
      <AdList
        adsList={adsResponse?.ads}
        isFetching={isFetching}
        isError={isError}
        error={error}
      />
    </>
  );
};

export default Advertisements;
