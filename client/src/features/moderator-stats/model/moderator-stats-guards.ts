import type { SummaryStatsPeriod } from '@/shared/api/types';

export const isSummaryStatsPeriod = (
  value: unknown
): value is SummaryStatsPeriod => {
  return (
    value === 'today' ||
    value === 'month' ||
    value === 'week' ||
    value === 'custom'
  );
};
