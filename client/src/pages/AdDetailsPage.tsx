import { AdvertisementDetails } from '@/features/advertisements-details';
import { Container } from '@/shared/ui';
import { Header } from '@/shared/widgets';

export const AdDetailsPage = () => {
  return (
    <Container>
      <Header />
      <AdvertisementDetails />
    </Container>
  );
};
