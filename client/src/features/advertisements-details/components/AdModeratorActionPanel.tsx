import {
  useApproveAdMutation,
  // useRejectAdMutation,
} from '@/shared/api/endpoints';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { AdReasonsReject } from './AdReasonsReject';

export const AdModeratorActionPanel = ({ adId }: { adId?: number }) => {
  const [approveAd] = useApproveAdMutation();
  // const [rejectAd] = useRejectAdMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleApproveAd = () => {
    if (adId) {
      approveAd(adId);
    }
  };

  const handleRejectAd = () => {
    if (adId) {
      showModal();
      // rejectAd({ id: adId, comment: '123', reason: 'Другое' });
    }
  };

  const handleRevisionAd = () => {};

  return (
    <div className="flex gap-2 flex-wrap">
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
      <Modal
        title="Выберите причину отклонения"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <AdReasonsReject />
      </Modal>
    </div>
  );
};
