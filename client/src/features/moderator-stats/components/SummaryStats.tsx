import { useGetSummaryStatsQuery } from '@/shared/api/endpoints';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Skeleton, Tabs } from 'antd';
import { changePeriodAd } from '../model';
import { getSummaryStatsItems } from '../utils';

export const SummaryStats = () => {
  const dispatch = useAppDispatch();
  const periodAd = useAppSelector((state) => state.moderatorStats.periodAd);
  const { data: summaryStats, isLoading } = useGetSummaryStatsQuery({
    period: periodAd,
  });

  const onChange = (key: string) => {
    dispatch(changePeriodAd(key));
  };

  if (isLoading) return <Skeleton active paragraph={{ rows: 10 }} />;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-xl">Всего проверено объявлений</h2>
      <Tabs
        defaultActiveKey={periodAd}
        items={getSummaryStatsItems(summaryStats)}
        onChange={onChange}
      />
    </div>
  );
};
