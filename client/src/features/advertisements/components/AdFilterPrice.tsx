import { InputNumber } from 'antd';
import { useFilterPrice } from '../hooks';
import type { AdChangeFilterParams, AdFilterPriceType } from '../model';

export interface AdFilterPriceProps extends AdFilterPriceType {
  handleChangeFilter: (filterParams: AdChangeFilterParams) => void;
}

export const AdFilterPrice = (filterPriceProps: AdFilterPriceProps) => {
  const { localMinPrice, localMaxPrice, setLocalMinPrice, setLocalMaxPrice } =
    useFilterPrice(filterPriceProps);

  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        Минимальная цена:
        <InputNumber
          suffix="₽"
          min={0}
          value={localMinPrice}
          onChange={(value) => setLocalMinPrice(value)}
          className="w-30!"
          placeholder="мин"
          name="min"
        />
      </div>
      <div className="flex items-center gap-2">
        Максимальная цена:
        <InputNumber
          suffix="₽"
          min={0}
          value={localMaxPrice}
          onChange={(value) => setLocalMaxPrice(value)}
          className="w-30!"
          placeholder="макс"
          name="max"
        />
      </div>
    </div>
  );
};
