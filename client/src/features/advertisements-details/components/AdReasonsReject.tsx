import type { ModeratorReason } from '@/shared/api/types';
import { Button, Input, Radio, type RadioChangeEvent } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import { AD_REASONS_REJECT_OPTIONS } from '../constants';

export const AdReasonsReject = () => {
  const [reasonValue, setReasonValue] =
    useState<ModeratorReason>('Запрещенный товар');
  const [commentValue, setCommentValue] = useState('');
  const [commentValueError, setCommentValueError] = useState(false);

  const handleReasonValue = (e: RadioChangeEvent) => {
    setReasonValue(e.target.value);
    setCommentValueError(false);
  };

  const handleRejectAd = () => {
    if (reasonValue === 'Другое' && !commentValue) {
      setCommentValueError(true);
      return;
    }

    setCommentValueError(false);
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
          onChange={(e) => setCommentValue(e.target.value)}
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
      <Button type="primary" onClick={handleRejectAd}>
        Отправить
      </Button>
    </div>
  );
};
