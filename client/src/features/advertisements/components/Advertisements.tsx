import { useGetAdsQuery } from '@/shared/api/endpoints';
import { AdFilters } from './AdFilters';
import { AdList } from './AdList';

export const Advertisements = () => {
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery(null);

  return (
    <>
      <AdFilters adsList={adsResponse?.ads} />
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
