import {
  useApproveAdMutation,
  useRejectAdMutation,
  useRequestChangesAdMutation,
} from '@/shared/api/endpoints';
import type { ModeratorReason } from '@/shared/api/types';
import { useState } from 'react';

export const useAdModeratorActionPanel = (id?: number) => {
  const [approveAd] = useApproveAdMutation();
  const [rejectAd] = useRejectAdMutation();
  const [requestChangesAd] = useRequestChangesAdMutation();
  const [modal, setModal] = useState<{
    isModalOpen: boolean;
    action?: 'reject' | 'request-changes';
  }>({ isModalOpen: false });

  const handleChangeVisibleModal = (
    visible: boolean,
    action?: 'reject' | 'request-changes'
  ) => {
    setModal({ isModalOpen: visible, action });
  };

  const handleApproveAd = () => {
    if (id) {
      approveAd(id);
    }
  };

  const handleReasonAd = (reason: ModeratorReason, comment: string) => {
    if (id) {
      if (modal.action === 'reject') {
        rejectAd({ id, reason, comment });
      } else if (modal.action === 'request-changes') {
        requestChangesAd({ id, reason, comment });
      }

      setModal({ isModalOpen: false });
    }
  };

  return {
    modal,
    handleApproveAd,
    handleReasonAd,
    handleChangeVisibleModal,
  };
};
