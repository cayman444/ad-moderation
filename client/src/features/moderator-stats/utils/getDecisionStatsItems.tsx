import type { DecisionsStats } from '@/shared/api/types';

export const getDecisionStatsItems = ({
  approved,
  rejected,
  requestChanges,
}: DecisionsStats) => {
  return [
    {
      type: 'Одобрено',
      value: approved,
    },
    {
      type: 'Отклонено',
      value: rejected,
    },
    {
      type: 'На доработке',
      value: requestChanges,
    },
  ].filter(({ value }) => value);
};
