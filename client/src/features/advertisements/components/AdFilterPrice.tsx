import { InputNumber } from 'antd';
import { memo } from 'react';
import { useFilterPrice } from '../hooks';
import type { AdChangeFilterParams, AdFilterPriceType } from '../model';

export interface AdFilterPriceProps extends AdFilterPriceType {
  handleChangeFilter: (filterParams: AdChangeFilterParams) => void;
}

const AdFilterPriceComponent = (filterPriceProps: AdFilterPriceProps) => {
  const {
    localMinPrice,
    localMaxPrice,
    handleMaxPriceChange,
    handleMinPriceChange,
  } = useFilterPrice(filterPriceProps);

  return (
    <div className="w-full flex gap-2 flex-wrap">
      <div className="flex-1 flex items-center gap-2 flex-wrap">
        <label htmlFor="min-price" className="text-nowrap">
          Минимальная цена:
        </label>
        <div className="flex-1">
          <InputNumber
            id="min-price"
            suffix="₽"
            min={0}
            value={localMinPrice}
            onChange={(value) => handleMinPriceChange(value)}
            className="w-full! min-w-30!"
            placeholder="мин"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center gap-2 flex-wrap">
        <label htmlFor="max-price" className="mb-0!">
          Максимальная цена:
        </label>
        <div className="flex-1">
          <InputNumber
            id="max-price"
            suffix="₽"
            min={0}
            value={localMaxPrice}
            onChange={(value) => handleMaxPriceChange(value)}
            className="w-full! min-w-30!"
            placeholder="макс"
          />
        </div>
      </div>
    </div>
  );
};

export const AdFilterPrice = memo(AdFilterPriceComponent);
