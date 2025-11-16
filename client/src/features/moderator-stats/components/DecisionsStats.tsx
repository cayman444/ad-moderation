import { useGetDecisionsStatsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import { Pie } from '@ant-design/charts';
import { Card, Spin } from 'antd';

export const DecisionsStats = () => {
  const period = useAppSelector((state) => state.moderatorStats.periodAd);

  const { data: decisionsStats, isFetching } = useGetDecisionsStatsQuery({
    period,
  });

  const config = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
  };

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-72">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl text-center">Распределение решений</h2>
      {decisionsStats ? (
        <Card variant="outlined">
          <Pie {...config} />
        </Card>
      ) : (
        <div className="text-center py-8">Нет данных за выбранный период</div>
      )}
    </div>
  );
};
