import { AdvertisementDetails } from '@/features/advertisements-details';
import { Container } from '@/shared/ui';
import { Header } from '@/shared/widgets';

export const AdDetailsPage = () => {
  return (
    <Container className="max-w-4xl">
      <Header />
      <AdvertisementDetails />
    </Container>
  );
};
