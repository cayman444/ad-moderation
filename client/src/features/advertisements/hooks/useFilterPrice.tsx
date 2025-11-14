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
      filter: 'minPrice',
      value: debouncedMinPrice,
    });
  }, [debouncedMinPrice, handleChangeFilter]);

  useEffect(() => {
    handleChangeFilter({
      filter: 'maxPrice',
      value: debouncedMaxPrice,
    });
  }, [debouncedMaxPrice, handleChangeFilter]);

  return { localMinPrice, localMaxPrice, setLocalMinPrice, setLocalMaxPrice };
};
