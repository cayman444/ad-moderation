import { ROUTES_PATHS } from '@/app/router';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export const AdDetailsNavigation = ({ adId }: { adId?: number }) => {
  const navigate = useNavigate();

  const prevAdId = adId ? adId - 1 : null;
  const nextAdId = adId ? adId + 1 : null;

  const handleChangeAd = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      navigate(`/item/${nextAdId}`);
    } else {
      navigate(`/item/${prevAdId}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between gap-2 flex-wrap">
      <Link to={ROUTES_PATHS.AD_LIST}>
        <Button icon={<ArrowLeftOutlined />}>Назад к списку</Button>
      </Link>
      <div className="flex gap-2 flex-wrap">
        <Button
          icon={<ArrowLeftOutlined />}
          disabled={!prevAdId ? true : false}
          onClick={() => handleChangeAd('prev')}
        >
          Предыдущее
        </Button>
        <Button
          icon={<ArrowRightOutlined />}
          iconPosition="end"
          disabled={!nextAdId ? true : false}
          onClick={() => handleChangeAd('next')}
        >
          Следующее
        </Button>
      </div>
    </div>
  );
};
