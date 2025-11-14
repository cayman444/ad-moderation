import { useGetAdsQuery } from '@/shared/api/endpoints';
import type { AdvertisementList } from '@/shared/api/types';
import { ErrorMessage } from '@/shared/ui';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { FC } from 'react';
import { AdListSkeleton } from '../ui';
import { AdItem } from './AdItem';

interface AdListParams {
  adsList?: AdvertisementList;
  isFetching: boolean;
  isError: boolean;
  error?: FetchBaseQueryError | SerializedError;
}

export const AdList: FC<AdListParams> = () => {
  const {
    data: adsResponse,
    isFetching,
    isError,
    error,
  } = useGetAdsQuery(null);

  if (isFetching) return <AdListSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <ul className="flex flex-col gap-4">
      {adsResponse?.ads.map((params) => (
        <AdItem key={params.id} {...params} />
      ))}
    </ul>
  );
};
