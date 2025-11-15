import type { ModeratorReason } from '@/shared/api/types';
import { Button, Input, Radio } from 'antd';
import clsx from 'clsx';
import type { FC } from 'react';
import { AD_REASONS_REJECT_OPTIONS } from '../constants';
import { useAdReasonsReject } from '../hooks';

export interface AdReasonsRejectProps {
  handleRejectAd: (reason: ModeratorReason, comment: string) => void;
}

export const AdReasonsReject: FC<AdReasonsRejectProps> = (params) => {
  const {
    commentValue,
    reasonValue,
    commentValueError,
    handleCommentValue,
    handleModalButtonClick,
    handleReasonValue,
  } = useAdReasonsReject(params);

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
