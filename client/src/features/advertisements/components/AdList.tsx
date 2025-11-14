import { useGetAdsQuery } from '@/shared/api/endpoints';
import { AdItem } from './AdItem';

export const AdList = () => {
  const { data: adsResponse } = useGetAdsQuery(null);

  return (
    <ul className="flex flex-col gap-4">
      {adsResponse?.ads.map((_, ind) => (
        <AdItem key={ind} />
      ))}
    </ul>
  );
};
