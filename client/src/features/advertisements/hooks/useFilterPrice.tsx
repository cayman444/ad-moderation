import { useDebounce } from '@/shared/hooks';
import { useEffect, useState } from 'react';
import type { AdFilterPriceProps } from '../components/AdFilterPrice';

export const useFilterPrice = ({
  minPrice,
  maxPrice,
  handleChangeFilter,
}: AdFilterPriceProps) => {
  const [localMinPrice, setLocalMinPrice] = useState<number | null | undefined>(
    minPrice
  );

  const debouncedMinPrice = useDebounce(localMinPrice);

  const [localMaxPrice, setLocalMaxPrice] = useState<number | null | undefined>(
    maxPrice
  );

  const debouncedMaxPrice = useDebounce(localMaxPrice);

  useEffect(() => {
    handleChangeFilter({
      filter: 'price',
      value: debouncedMinPrice,
      typePrice: 'minPrice',
    });
  }, [debouncedMinPrice, handleChangeFilter]);

  useEffect(() => {
    handleChangeFilter({
      filter: 'price',
      value: debouncedMaxPrice,
      typePrice: 'maxPrice',
    });
  }, [debouncedMaxPrice, handleChangeFilter]);

  return { localMinPrice, localMaxPrice, setLocalMinPrice, setLocalMaxPrice };
};
