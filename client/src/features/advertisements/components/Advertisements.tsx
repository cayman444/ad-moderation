import { useAdvertisements } from '../hooks';
import { AdFilters } from './AdFilters';
import { AdList } from './AdList';
import { AdPagination } from './AdPagination';

export const Advertisements = () => {
  const {
    adsList,
    currentPage,
    totalItems,
    error,
    isError,
    isFetching,
    onChangePage,
  } = useAdvertisements();

  return (
    <main className="flex flex-col gap-8 pt-5 pb-10">
      <AdFilters />
      <AdList
        adsList={adsList}
        isFetching={isFetching}
        isError={isError}
        error={error}
      />
      <AdPagination
        currentPage={currentPage}
        totalItems={totalItems}
        onChangePage={onChangePage}
      />
    </main>
  );
};

export default Advertisements;
