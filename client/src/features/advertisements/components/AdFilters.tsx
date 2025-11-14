import type { AdvertisementList } from '@/shared/api/types';
import type { FC } from 'react';
import { AdFilterSelect } from '../ui';
import { getCategoryOptions, getStatusOptions } from '../utils';

interface AdFiltersParams {
  adsList?: AdvertisementList;
}

export const AdFilters: FC<AdFiltersParams> = ({ adsList }) => {
  return (
    <div className="flex gap-2">
      <AdFilterSelect
        options={getStatusOptions()}
        multiple
        placeholder="Статус"
        onChange={() => null}
      />
      <AdFilterSelect
        options={getCategoryOptions(adsList)}
        placeholder="Категория"
        onChange={() => null}
      />
    </div>
  );
};
