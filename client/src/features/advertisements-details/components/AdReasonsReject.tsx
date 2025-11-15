import type { ModeratorReason } from '@/shared/api/types';
import { Button, Input, Radio, type RadioChangeEvent } from 'antd';
import clsx from 'clsx';
import { type ChangeEvent, type FC, useState } from 'react';
import { AD_REASONS_REJECT_OPTIONS } from '../constants';

interface AdReasonsRejectProps {
  handleRejectAd: (reason: ModeratorReason, comment: string) => void;
}

export const AdReasonsReject: FC<AdReasonsRejectProps> = ({
  handleRejectAd,
}) => {
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

  return (
    <div className="flex flex-col gap-4 mt-6">
      <Radio.Group
        onChange={handleReasonValue}
        value={reasonValue}
        options={AD_REASONS_REJECT_OPTIONS}
        className="flex! flex-col! gap-2!"
      />
      <div className="flex flex-col gap-1">
        <Input.TextArea
          placeholder="Комментарий"
          value={commentValue}
          onChange={handleCommentValue}
          status={commentValueError ? 'error' : undefined}
          name="comment"
          disabled={reasonValue !== 'Другое'}
          className={clsx(
            'min-h-20! max-h-40!',
            reasonValue !== 'Другое' && 'resize-none!'
          )}
        />
        {commentValueError && (
          <p className="text-red-500">Укажите комментарий</p>
        )}
      </div>
      <Button type="primary" onClick={handleModalButtonClick}>
        Отправить
      </Button>
    </div>
  );
};
