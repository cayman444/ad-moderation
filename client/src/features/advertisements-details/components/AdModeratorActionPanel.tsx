import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useAdModeratorActionPanel } from '../hooks';
import { AdReasons } from './AdReasons';

export const AdModeratorActionPanel = ({ adId }: { adId?: number }) => {
  const { modal, handleApproveAd, handleReasonAd, handleChangeVisibleModal } =
    useAdModeratorActionPanel(adId);

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
        onClick={() => handleChangeVisibleModal(true, 'reject')}
      >
        Отклонить
      </Button>
      <Button
        size="large"
        variant="solid"
        color="orange"
        icon={<EditOutlined />}
        onClick={() => handleChangeVisibleModal(true, 'request-changes')}
      >
        Вернуть на доработку
      </Button>
      <Modal
        title={
          modal.action === 'reject'
            ? 'Выберите причину отклонения'
            : 'Выберите причину доработки'
        }
        open={modal.isModalOpen}
        onOk={() => handleChangeVisibleModal(true)}
        onCancel={() => handleChangeVisibleModal(false)}
        footer={false}
      >
        <AdReasons handleReasonAd={handleReasonAd} />
      </Modal>
    </div>
  );
};
