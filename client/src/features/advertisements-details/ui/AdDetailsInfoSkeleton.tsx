import { Skeleton } from 'antd';

export const AdDetailsInfoSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton active paragraph={{ rows: 8 }} />
      <Skeleton active paragraph={{ rows: 7 }} />
      <Skeleton active paragraph={{ rows: 6 }} />
    </div>
  );
};
