import clsx from 'clsx';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx('max-w-3xl px-4 mx-auto', className)} {...props}>
      {children}
    </div>
  );
};
