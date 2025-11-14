import type { AdStatus } from '@/shared/api/types';

export interface AdFiltersState {
  status: AdStatus[];
  categoryId?: number;
  price: AdFilterPriceType;
  search?: string;
}

export interface AdFilterPriceType {
  minPrice?: number | null;
  maxPrice?: number | null;
}

export interface AdChangeFilterParams {
  filter: keyof AdFiltersState;
  value?: AdStatus[] | number | string | null;
  typePrice?: keyof AdFilterPriceType;
}
