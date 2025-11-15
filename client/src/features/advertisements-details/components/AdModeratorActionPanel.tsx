import { useApproveAdMutation } from '@/shared/api/endpoints';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const AdModeratorActionPanel = ({ adId }: { adId?: number }) => {
  const [approveAd] = useApproveAdMutation();

  const handleApproveAd = () => {
    if (adId) {
      approveAd(adId.toString());
    }
  };

  const handleRejectAd = () => {};

  const handleRevisionAd = () => {};

  return (
    <div className="flex gap-2">
      <Button
        size="large"
        variant="solid"
        color="green"
        icon={<CheckOutlined />}
        onClick={handleApproveAd}
      >
        Одобрить
      </Button>
      <Button
        size="large"
        variant="solid"
        color="red"
        icon={<CloseOutlined />}
        onClick={handleRejectAd}
      >
        Отклонить
      </Button>
      <Button
        size="large"
        variant="solid"
        color="orange"
        icon={<EditOutlined />}
        onClick={handleRevisionAd}
      >
        Вернуть на доработку
      </Button>
    </div>
  );
};
