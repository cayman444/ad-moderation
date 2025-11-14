import type { AdStatus } from '@/shared/api/types';
import { useAdFilters } from '../hooks';
import { AdFilterSelect } from '../ui';
import { getCategoryOptions, getStatusOptions } from '../utils';
import { AdFilterPrice } from './AdFilterPrice';

export const AdFilters = () => {
  const {
    adsResponse,
    categoryId,
    price,
    status,
    isFetching,
    handleChangeFilter,
  } = useAdFilters();

  return (
    <div className="flex gap-2 flex-wrap">
      <AdFilterSelect
        options={getStatusOptions()}
        defaultValue={status}
        multiple
        placeholder="Статус"
        onChange={(value?: AdStatus[]) =>
          handleChangeFilter({ filter: 'status', value })
        }
      />
      <AdFilterSelect
        options={getCategoryOptions(adsResponse?.ads)}
        defaultValue={categoryId}
        isFetching={isFetching}
        placeholder="Категория"
        onChange={(value?: number) =>
          handleChangeFilter({ filter: 'categoryId', value })
        }
      />
      <AdFilterPrice {...price} handleChangeFilter={handleChangeFilter} />
    </div>
  );
};
