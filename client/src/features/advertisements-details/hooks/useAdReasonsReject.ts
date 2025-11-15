import type { ModeratorReason } from '@/shared/api/types';
import type { RadioChangeEvent } from 'antd';
import { type ChangeEvent, useState } from 'react';
import type { AdReasonsRejectProps } from '../components/AdReasonsReject';

export const useAdReasonsReject = ({
  handleRejectAd,
}: AdReasonsRejectProps) => {
  const [reasonValue, setReasonValue] =
    useState<ModeratorReason>('Запрещенный товар');
  const [commentValue, setCommentValue] = useState('');
  const [commentValueError, setCommentValueError] = useState(false);

  const handleReasonValue = (e: RadioChangeEvent) => {
    setReasonValue(e.target.value);

    setCommentValueError(false);
  };

  const handleCommentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const handleModalButtonClick = () => {
    if (reasonValue === 'Другое' && !commentValue) {
      setCommentValueError(true);
      return;
    }

    setCommentValueError(false);
    handleRejectAd(reasonValue, commentValue);
  };

  return {
    reasonValue,
    commentValue,
    commentValueError,
    handleReasonValue,
    handleCommentValue,
    handleModalButtonClick,
  };
};
