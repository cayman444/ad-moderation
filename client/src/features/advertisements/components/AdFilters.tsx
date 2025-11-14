import { useGetAdsQuery } from '@/shared/api/endpoints';
import type { AdStatus } from '@/shared/api/types';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { type AdChangeFilterParams, changeFilter } from '../model';
import { AdFilterSelect } from '../ui';
import { getCategoryOptions, getStatusOptions } from '../utils';

export const AdFilters = () => {
  const dispatch = useAppDispatch();

  const { status, categoryId } = useAppSelector((state) => state.adFilters);

  const handleChangeSelect = (filterParams: AdChangeFilterParams) => {
    dispatch(changeFilter(filterParams));
  };

  // Дополнительный запрос к api без параметров для получения всех категорий
  const { data: adsResponse, isFetching } = useGetAdsQuery({});

  return (
    <div className="flex gap-2">
      <AdFilterSelect
        options={getStatusOptions()}
        defaultValue={status}
        multiple
        placeholder="Статус"
        onChange={(value?: AdStatus[]) =>
          handleChangeSelect({ filter: 'status', value })
        }
      />
      <AdFilterSelect
        options={getCategoryOptions(adsResponse?.ads)}
        defaultValue={categoryId}
        isFetching={isFetching}
        placeholder="Категория"
        onChange={(value?: number) =>
          handleChangeSelect({ filter: 'categoryId', value })
        }
      />
    </div>
  );
};
