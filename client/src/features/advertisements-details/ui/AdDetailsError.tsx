import { ROUTES_PATHS } from '@/app/router';
import { ErrorMessage } from '@/shared/ui';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const AdDetailsError = ({
  error,
}: {
  error?: FetchBaseQueryError | SerializedError;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <ErrorMessage error={error} />
      <Button
        className="self-center!"
        type="primary"
        onClick={() => navigate(ROUTES_PATHS.AD_LIST)}
      >
        Вернуться к списку объявлений
      </Button>
    </div>
  );
};
