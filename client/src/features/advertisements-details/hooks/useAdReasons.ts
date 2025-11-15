import type { ModeratorReason } from '@/shared/api/types';
import type { RadioChangeEvent } from 'antd';
import { type ChangeEvent, useState } from 'react';
import type { AdReasonsProps } from '../components/AdReasons';

export const useAdReasons = ({ handleReasonAd }: AdReasonsProps) => {
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

    const currentCommentValue = reasonValue !== 'Другое' ? '' : commentValue;

    setCommentValueError(false);
    setCommentValue('');
    handleReasonAd(reasonValue, currentCommentValue);
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
