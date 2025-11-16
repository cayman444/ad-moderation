import { useGetDecisionsStatsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import type { PieConfig } from '@ant-design/charts';
import { getDecisionStatsItems } from '../utils';

export const useDecisionsStats = () => {
  const period = useAppSelector((state) => state.moderatorStats.periodAd);

  const { data: decisionsStats, isFetching } = useGetDecisionsStatsQuery({
    period,
  });

  const data = decisionsStats ? getDecisionStatsItems(decisionsStats) : [];

  const config: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
  };

  return { decisionsStats, isFetching, config };
};
