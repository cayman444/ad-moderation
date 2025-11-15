import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useAdModeratorActionPanel } from '../hooks';
import { AdReasonsReject } from './AdReasonsReject';

export const AdModeratorActionPanel = ({ adId }: { adId?: number }) => {
  const {
    isModalOpen,
    handleApproveAd,
    handleRejectAd,
    handleRevisionAd,
    handleChangeVisibleModal,
  } = useAdModeratorActionPanel(adId);

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
