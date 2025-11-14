import { Form, InputNumber } from 'antd';
import { memo } from 'react';
import { useFilterPrice } from '../hooks';
import type { AdChangeFilterParams, AdFilterPriceType } from '../model';

export interface AdFilterPriceProps extends AdFilterPriceType {
  handleChangeFilter: (filterParams: AdChangeFilterParams) => void;
}

const AdFilterPriceComponent = (filterPriceProps: AdFilterPriceProps) => {
  const { localMinPrice, localMaxPrice, setLocalMinPrice, setLocalMaxPrice } =
    useFilterPrice(filterPriceProps);

  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <Form.Item
          label={<span className="text-base">Минимальная цена</span>}
          htmlFor="min-price"
          className="mb-0!"
        >
          <InputNumber
            id="min-price"
            suffix="₽"
            min={0}
            value={localMinPrice}
            onChange={(value) => setLocalMinPrice(value)}
            className="w-30!"
            placeholder="мин"
          />
        </Form.Item>
      </div>
      <div className="flex items-center gap-2">
        <Form.Item
          label={<span className="text-base">Максимальная цена</span>}
          htmlFor="max-price"
          className="mb-0!"
          style={{ fontSize: 16 }}
        >
          <InputNumber
            id="max-price"
            suffix="₽"
            min={0}
            value={localMaxPrice}
            onChange={(value) => setLocalMaxPrice(value)}
            className="w-30!"
            placeholder="макс"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export const AdFilterPrice = memo(AdFilterPriceComponent);
