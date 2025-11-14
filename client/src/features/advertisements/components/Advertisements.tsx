import { useGetAdsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import { AdFilters } from './AdFilters';
import { AdList } from './AdList';

export const Advertisements = () => {
  const { status, categoryId } = useAppSelector((state) => state.adFilters);

  // Основной запрос к api с параметрами
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery({ status, categoryId });

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
