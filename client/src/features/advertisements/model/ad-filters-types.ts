import type { AdStatus } from '@/shared/api/types';

export interface AdFiltersState {
  status: AdStatus[];
  categoryId?: number;
}

export interface AdChangeFilterParams {
  filter: keyof AdFiltersState;
  value?: AdStatus[] | number | string;
}
