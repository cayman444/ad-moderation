import { AdvertisementDetails } from '@/features/advertisements-details';
import { Container } from '@/shared/ui';

export const AdDetailsPage = () => {
  return (
    <main className="py-20">
      <Container className="flex flex-col gap-8 max-w-4xl">
        <AdvertisementDetails />
      </Container>
    </main>
  );
};
