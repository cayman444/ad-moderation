import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface ErrorMessageProps extends ComponentProps<'div'> {
  error?: string | FetchBaseQueryError | SerializedError;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ className, error }) => {
  if (error && typeof error !== 'string' && 'status' in error) {
    return (
      <div className={clsx('text-center font-medium text-red-500', className)}>
        {error.status}: {JSON.stringify(error.data)}
      </div>
    );
  }

  return (
    <div className={clsx('text-center font-medium text-red-500', className)}>
      {error?.toString()}
    </div>
  );
};
