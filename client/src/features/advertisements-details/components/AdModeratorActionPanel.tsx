import {
  useApproveAdMutation,
  useRejectAdMutation,
} from '@/shared/api/endpoints';
import type { ModeratorReason } from '@/shared/api/types';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { AdReasonsReject } from './AdReasonsReject';

export const AdModeratorActionPanel = ({ adId }: { adId?: number }) => {
  const [approveAd] = useApproveAdMutation();
  const [rejectAd] = useRejectAdMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeVisibleModal = (visible: boolean) => {
    setIsModalOpen(visible);
  };

  const handleApproveAd = () => {
    if (adId) {
      approveAd(adId);
    }
  };

  const handleRejectAd = (reason: ModeratorReason, comment: string) => {
    if (adId) {
      rejectAd({ id: adId, reason, comment });
      handleChangeVisibleModal(false);
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
        onClick={() => handleChangeVisibleModal(true)}
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
        onOk={() => handleChangeVisibleModal(true)}
        onCancel={() => handleChangeVisibleModal(false)}
        footer={false}
      >
        <AdReasonsReject handleRejectAd={handleRejectAd} />
      </Modal>
    </div>
  );
};
