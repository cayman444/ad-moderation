import { Column } from '@ant-design/charts';
import { Spin } from 'antd';
import { useChartActivity } from '../hooks';

export const ChartActivity = () => {
  const { activityData, config, isFetching } = useChartActivity();

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-72">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl">График активности</h2>
      {activityData.length > 0 ? (
        <Column {...config} />
      ) : (
        <div className="text-center py-8">Нет данных за выбранный период</div>
      )}
    </div>
  );
};
