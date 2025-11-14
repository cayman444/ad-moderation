import { useAdvertisements } from '../hooks';
import { AdFilters } from './AdFilters';
import { AdList } from './AdList';

export const Advertisements = () => {
  const { adsResponse, error, isError, isFetching } = useAdvertisements();

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
