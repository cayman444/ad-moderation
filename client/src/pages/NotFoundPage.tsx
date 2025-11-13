import { ROUTES_PATHS } from '@/app/router';
import { Button, Flex, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="center" align="center" className="h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate(ROUTES_PATHS.AD_LIST)}>
            Back Home
          </Button>
        }
      />
    </Flex>
  );
};
