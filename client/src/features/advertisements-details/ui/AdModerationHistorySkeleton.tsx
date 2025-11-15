import { Skeleton } from 'antd';

export const AdModerationHistorySkeleton = () => {
  return (
    <div className="h-50">
      <Skeleton active paragraph={{ rows: 5 }} />
    </div>
  );
};
