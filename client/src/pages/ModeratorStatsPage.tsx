import { ModeratorStats } from '@/features/moderator-stats';
import { Container } from '@/shared/ui';
import { Header } from '@/shared/widgets';

export const ModeratorStatsPage = () => {
  return (
    <Container>
      <Header />
      <ModeratorStats />
    </Container>
  );
};
