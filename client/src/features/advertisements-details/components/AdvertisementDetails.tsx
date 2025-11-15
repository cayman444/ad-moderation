import { useAdvertisementDetails } from '../hooks';
import { AdImagesCarousel } from './AdImagesCarousel';
import { AdModerationHistory } from './AdModerationHistory';

export const AdvertisementDetails = () => {
  const { adDetails, isFetching } = useAdvertisementDetails();

  return (
    <div className="flex flex-col gap-4 p-4 border">
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <AdImagesCarousel images={adDetails?.images} isFetching={isFetching} />
        <AdModerationHistory
          moderationHistory={adDetails?.moderationHistory}
          isFetching={isFetching}
        />
      </div>
      <div>Полное описание</div>
    </div>
  );
};
