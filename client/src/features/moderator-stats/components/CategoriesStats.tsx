import { useGetCategoriesStatsQuery } from '@/shared/api/endpoints';
import { useAppSelector } from '@/shared/store';
import { Column, type ColumnConfig } from '@ant-design/charts';
import { Card, Spin } from 'antd';

export const CategoriesStats = () => {
  const periodAd = useAppSelector((state) => state.moderatorStats.periodAd);
  const { data: categoriesStats, isFetching } = useGetCategoriesStatsQuery({
    period: periodAd,
  });

  const config: ColumnConfig = {
    data: Object.entries(categoriesStats ?? []).map(([key, value]) => ({
      key,
      value,
    })),
    xField: 'key',
    yField: 'value',
  };

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-72">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-xl text-center">
        График по категориям проверенных объявлений
      </h2>
      {categoriesStats ? (
        <Card variant="outlined">
          <Column {...config} className={'h-72!'} />
        </Card>
      ) : (
        <div className="text-center py-8">Нет данных за выбранный период</div>
      )}
    </div>
  );
};
