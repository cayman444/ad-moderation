import { ROUTES_PATHS } from '@/app/router';
import { LineChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex gap-2 flex-wrap py-5">
      <Link to={ROUTES_PATHS.AD_LIST}>
        <Button
          type={pathname === ROUTES_PATHS.AD_LIST ? 'primary' : 'text'}
          icon={<UnorderedListOutlined />}
        >
          Список объявлений
        </Button>
      </Link>
      <Link to={ROUTES_PATHS.MODERATOR_STATS}>
        <Button
          type={pathname === ROUTES_PATHS.MODERATOR_STATS ? 'primary' : 'text'}
          icon={<LineChartOutlined />}
        >
          Статистика
        </Button>
      </Link>
    </header>
  );
};
