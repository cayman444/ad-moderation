import { useGetChartActivityQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import { useMemo } from 'react';
import { getChartActivityItems } from '../utils';

export const useChartActivity = () => {
  const periodAd = useAppSelector((state) => state.moderatorStats.periodAd);
  const { data: activityData = [], isFetching } = useGetChartActivityQuery({
    period: periodAd,
  });

  const chartData = useMemo(() => {
    if (periodAd === 'today' && activityData.length) {
      return getChartActivityItems(activityData[activityData.length - 1]);
    }

    return activityData
      .filter(
        ({ approved, rejected, requestChanges }) =>
          approved || rejected || requestChanges
      )
      .flatMap(getChartActivityItems);
  }, [activityData, periodAd]);

  const config = {
    data: chartData,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
  };

  return { activityData, isFetching, config };
};
