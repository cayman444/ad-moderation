import type { AdStatus } from '@/shared/api/types';

export interface AdFiltersState {
  status: AdStatus[];
  categoryId?: number;
  price: AdFilterPriceType;
  sort: AdFilterSortType;
  search?: string;
  page?: number;
}

export interface AdFilterPriceType {
  minPrice?: number | null;
  maxPrice?: number | null;
}
export interface AdFilterSortType {
  sortBy?: SortBy | null;
  sortOrder?: sortOrder | null;
}

export type SortBy = 'createdAt' | 'price' | 'priority';
export type sortOrder = 'desc' | 'asc';

export interface AdChangeFilterParams {
  filter: keyof AdFiltersState;
  value?: AdStatus[] | number | string | null;
  typePrice?: keyof AdFilterPriceType;
  typeSort?: keyof AdFilterSortType;
}
