import type { SortBy, sortOrder } from './ad-filters-types';

export const isSortByValue = (value: unknown): value is SortBy => {
  return value === 'createdAt' || value === 'price' || value === 'priority';
};

export const isSortOrderValue = (value: unknown): value is sortOrder => {
  return value === 'desc' || value === 'asc';
};
