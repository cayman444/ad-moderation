import {
  useApproveAdMutation,
  useRejectAdMutation,
} from '@/shared/api/endpoints';
import type { ModeratorReason } from '@/shared/api/types';
import { useState } from 'react';

export const useAdModeratorActionPanel = (id?: number) => {
  const [approveAd] = useApproveAdMutation();
  const [rejectAd] = useRejectAdMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeVisibleModal = (visible: boolean) => {
    setIsModalOpen(visible);
  };

  const handleApproveAd = () => {
    if (id) {
      approveAd(id);
    }
  };

  const handleRejectAd = (reason: ModeratorReason, comment: string) => {
    if (id) {
      rejectAd({ id, reason, comment });
      handleChangeVisibleModal(false);
    }
  };

  const handleRevisionAd = () => {};

  return {
    isModalOpen,
    handleApproveAd,
    handleRejectAd,
    handleRevisionAd,
    handleChangeVisibleModal,
  };
};
