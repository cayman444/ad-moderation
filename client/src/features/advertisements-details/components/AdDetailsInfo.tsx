import type { Advertisement } from '@/shared/api/types';
import type { FC } from 'react';
import { AdDetailsInfoSkeleton } from '../ui';
import { AdDetailsCharacteristics } from './AdDetailsCharacteristics';
import { AdDetailsDescription } from './AdDetailsDescription';
import { AdDetailsInfoSeller } from './AdDetailsInfoSeller';

interface AdDetailsInfoProps extends Partial<Advertisement> {
  isFetching: boolean;
}

export const AdDetailsInfo: FC<AdDetailsInfoProps> = (adDetails) => {
  if (adDetails.isFetching) return <AdDetailsInfoSkeleton />;

  return (
    <div className="flex flex-col gap-4">
      <AdDetailsDescription {...adDetails} />
      <AdDetailsCharacteristics characteristics={adDetails.characteristics} />
      <AdDetailsInfoSeller {...adDetails.seller} />
    </div>
  );
};
