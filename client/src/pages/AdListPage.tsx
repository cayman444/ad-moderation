import { Advertisements } from '@/features/advertisements';
import { Container } from '@/shared/ui';

export const AdListPage = () => {
  return (
    <main className="py-20">
      <Container className="flex flex-col gap-8">
        <Advertisements />
      </Container>
    </main>
  );
};
