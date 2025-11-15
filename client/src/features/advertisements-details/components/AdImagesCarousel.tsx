import { Carousel, Skeleton } from 'antd';
import type { FC } from 'react';

interface AdImagesCarouselProps {
  images?: string[];
  isFetching: boolean;
}

export const AdImagesCarousel: FC<AdImagesCarouselProps> = ({
  images,
  isFetching,
}) => {
  if (isFetching)
    return <Skeleton.Node active className="h-full! w-full! rounded-lg!" />;

  return (
    <Carousel arrows dots={false} className="rounded-lg! overflow-hidden!">
      {images?.map((image) => (
        <img
          key={image}
          src={image}
          className="w-full  object-cover rounded-lg h-70 md:h-full"
          alt=""
        />
      ))}
    </Carousel>
  );
};
