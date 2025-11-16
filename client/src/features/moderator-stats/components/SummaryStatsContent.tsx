import type { SummaryStats } from '@/shared/api/types';
import { Card, Statistic } from 'antd';

export const SummaryStatsContent = ({
  approvedPercentage,
  totalReviewed,
  rejectedPercentage,
  averageReviewTime,
}: Partial<SummaryStats>) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex gap-2 flex-wrap">
        <Card variant="outlined" className="flex-1 min-w-42">
          <Statistic
            title="Одобрено"
            value={approvedPercentage}
            valueStyle={{ color: '#3f8600' }}
            precision={2}
            suffix="%"
          />
        </Card>
        <Card variant="outlined" className="flex-1 min-w-42">
          <Statistic
            title="Отклонено"
            value={rejectedPercentage}
            valueStyle={{ color: '#cf1322' }}
            precision={2}
            suffix="%"
          />
        </Card>
      </div>
      <div className="w-full flex gap-2 flex-wrap">
        <Card variant="outlined" className="flex-1 min-w-42">
          <Statistic title="Проверено" value={totalReviewed} />
        </Card>
        <Card variant="outlined" className="flex-1 min-w-42">
          <Statistic
            title="Среднее время проверки"
            value={Math.round((averageReviewTime ?? 0) / 1000 / 60) || 1}
            suffix="мин"
          />
        </Card>
      </div>
    </div>
  );
};
