import type { SummaryStats } from '@/shared/api/types';
import type { TabsProps } from 'antd';
import { SummaryStatsContent } from '../components/SummaryStatsContent';

export const getSummaryStatsItems = (
  summaryStats?: SummaryStats
): TabsProps['items'] => {
  if (!summaryStats) return [];

  return [
    {
      key: 'today',
      label: 'Сегодня',
      children: <SummaryStatsContent {...summaryStats} />,
    },
    {
      key: 'week',
      label: 'Неделя',
      children: <SummaryStatsContent {...summaryStats} />,
    },
    {
      key: 'month',
      label: 'Месяц',
      children: <SummaryStatsContent {...summaryStats} />,
    },
  ];
};
