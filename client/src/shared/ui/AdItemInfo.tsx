import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface AdItemInfoProps extends ComponentProps<'div'> {
  title: string;
}

export const AdItemInfo: FC<AdItemInfoProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={clsx('flex items-center gap-1 flex-wrap', className)}>
      {title}: <span className="font-medium">{children}</span>
    </div>
  );
};
