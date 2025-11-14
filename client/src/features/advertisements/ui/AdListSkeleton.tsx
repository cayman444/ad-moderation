import { Skeleton } from 'antd';

export const AdListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 flex-wrap border p-4"
        >
          <div className="relative h-20 w-20">
            <Skeleton.Node
              active
              className="absolute! inset-0! w-full! h-full! rounded-lg!"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Skeleton active paragraph={{ rows: 3 }} />
          </div>
        </div>
      ))}
    </div>
  );
};
