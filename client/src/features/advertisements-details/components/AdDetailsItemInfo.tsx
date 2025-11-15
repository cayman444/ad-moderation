import type { FC, PropsWithChildren } from 'react';

interface AdDetailsItemInfoProps extends PropsWithChildren {
  title: string;
}

export const AdDetailsItemInfo: FC<AdDetailsItemInfoProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {title}: <span className="font-medium">{children}</span>
    </div>
  );
};
