import { Container } from '@/shared/ui';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
