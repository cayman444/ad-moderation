import { useGetAdsQuery } from '@/shared/api/endpoints';
import { ErrorMessage } from '@/shared/ui';
import { AdListSkeleton } from '../ui/AdListSkeleton';
import { AdItem } from './AdItem';

export const AdList = () => {
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
