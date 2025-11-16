import type { AdStatsPeriod } from '@/shared/api/types';

export const isAdStatsPeriod = (value: unknown): value is AdStatsPeriod => {
  return (
    value === 'today' ||
    value === 'month' ||
    value === 'week' ||
    value === 'custom'
  );
};
