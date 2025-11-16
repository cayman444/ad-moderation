import { Pie } from '@ant-design/charts';
import { Card, Spin } from 'antd';
import { useDecisionsStats } from '../hooks/useDecisionsStats';

export const DecisionsStats = () => {
  const { decisionsStats, isFetching, config } = useDecisionsStats();

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
          <Pie {...config} className={'h-72!'} />
        </Card>
      ) : (
        <div className="text-center py-8">Нет данных за выбранный период</div>
      )}
    </div>
  );
};
