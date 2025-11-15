import type { AdPriority, AdStatus, ModeratorAction } from '@/shared/api/types';
import { AD_TAG_CONFIG } from '../constants';
import type { AdTagProps } from '../types/ad-tag-types';

export const getAdTagInfo = ({ type, value }: AdTagProps) => {
  if (type === 'status' && isAdStatus(value)) {
    return AD_TAG_CONFIG.status[value];
  }

  if (type === 'status' && isModeratorAction(value)) {
    return AD_TAG_CONFIG.status[value];
  }

  if (type === 'priority' && isAdPriority(value)) {
    return AD_TAG_CONFIG.priority[value];
  }

  return { color: 'default', label: 'Не определено' };
};

const isAdStatus = (value: unknown): value is AdStatus => {
  return (
    value === 'approved' ||
    value === 'draft' ||
    value === 'pending' ||
    value === 'rejected'
  );
};

const isAdPriority = (value: unknown): value is AdPriority => {
  return value === 'normal' || value === 'urgent';
};

const isModeratorAction = (value: unknown): value is ModeratorAction => {
  return (
    value === 'approved' || value === 'rejected' || value === 'requestChanges'
  );
};
