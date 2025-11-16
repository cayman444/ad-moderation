import type { ActivityData } from '@/shared/api/types';

export const getChartActivityItems = (activity: ActivityData) => {
  const { approved, rejected, requestChanges, date } = activity;

  return [
    {
      date,
      type: 'Одобрено',
      value: approved,
    },
    {
      date,
      type: 'Отклонено',
      value: rejected,
    },
    {
      date,
      type: 'Требуются исправления',
      value: requestChanges,
    },
  ];
};
