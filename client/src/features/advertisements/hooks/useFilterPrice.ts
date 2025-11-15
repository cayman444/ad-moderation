import { useEffect, useState } from 'react';
import type { AdFilterPriceProps } from '../components/AdFilterPrice';

export const useFilterPrice = ({
  minPrice,
  maxPrice,
  handleChangeFilter,
}: AdFilterPriceProps) => {
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);

  const handleMinPriceChange = (value?: number | null) => {
    setLocalMinPrice(value);
    handleChangeFilter({
      filter: 'price',
      value,
      typePrice: 'minPrice',
    });
  };

  const handleMaxPriceChange = (value?: number | null) => {
    setLocalMaxPrice(value);
    handleChangeFilter({
      filter: 'price',
      value,
      typePrice: 'maxPrice',
    });
  };

  useEffect(() => {
    setLocalMinPrice(minPrice);
  }, [minPrice]);

  useEffect(() => {
    setLocalMaxPrice(maxPrice);
  }, [maxPrice]);

  return {
    localMinPrice,
    localMaxPrice,
    handleMinPriceChange,
    handleMaxPriceChange,
  };
};
