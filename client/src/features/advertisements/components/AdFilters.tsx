import type { AdStatus } from '@/shared/api/types';
import { Button } from 'antd';
import { useAdFilters } from '../hooks';
import { AdFilterSelect } from '../ui';
import { getCategoryOptions, getStatusOptions } from '../utils';
import { AdFilterPrice } from './AdFilterPrice';
import { AdFilterSearch } from './AdFilterSearch';

export const AdFilters = () => {
  const {
    adsResponse,
    categoryId,
    price,
    status,
    search,
    isFetching,
    handleChangeFilter,
    resetAllFilters,
  } = useAdFilters();

  return (
    <div className="flex gap-2 flex-wrap">
      <AdFilterSelect
        options={getStatusOptions()}
        value={status}
        multiple
        placeholder="Статус"
        onChange={(value?: AdStatus[]) =>
          handleChangeFilter({ filter: 'status', value })
        }
      />
      <AdFilterSelect
        options={getCategoryOptions(adsResponse?.ads)}
        value={categoryId}
        isFetching={isFetching}
        placeholder="Категория"
        onChange={(value?: number) =>
          handleChangeFilter({ filter: 'categoryId', value })
        }
      />
      <AdFilterPrice {...price} handleChangeFilter={handleChangeFilter} />
      <div className="flex-1 flex gap-2 flex-wrap">
        <div className="flex-1 flex gap-2">
          <AdFilterSearch
            search={search}
            handleChangeFilter={handleChangeFilter}
          />
        </div>
        <Button type="primary" onClick={resetAllFilters}>
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
};
