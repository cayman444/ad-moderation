import { useAdvertisementDetails } from '../hooks';
import { AdDetailsError } from '../ui';
import { AdDetailsInfo } from './AdDetailsInfo';
import { AdDetailsNavigation } from './AdDetailsNavigation';
import { AdImagesCarousel } from './AdImagesCarousel';
import { AdModerationHistory } from './AdModerationHistory';
import { AdModeratorActionPanel } from './AdModeratorActionPanel';

export const AdvertisementDetails = () => {
  const { adDetails, isFetching, isError, error } = useAdvertisementDetails();

  if (isError) return <AdDetailsError error={error} />;

  return (
    <div className="flex flex-col gap-8 p-4 border">
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <AdImagesCarousel images={adDetails?.images} isFetching={isFetching} />
        <AdModerationHistory
          moderationHistory={adDetails?.moderationHistory}
          isFetching={isFetching}
        />
      </div>
      <AdDetailsInfo
        description={adDetails?.description}
        title={adDetails?.title}
        characteristics={adDetails?.characteristics}
        seller={adDetails?.seller}
        isFetching={isFetching}
      />
      <AdModeratorActionPanel adId={adDetails?.id} />
      <AdDetailsNavigation adId={adDetails?.id} />
    </div>
  );
};
