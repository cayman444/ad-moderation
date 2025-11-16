import { Advertisements } from '@/features/advertisements';
import { Container } from '@/shared/ui';
import { Header } from '@/shared/widgets';

export const AdListPage = () => {
  return (
    <Container>
      <Header />
      <Advertisements />
    </Container>
  );
};
