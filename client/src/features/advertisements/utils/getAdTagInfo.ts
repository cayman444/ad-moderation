import type { AdPriority, AdStatus } from '@/shared/api/types';
import { AD_TAG_CONFIG } from '../constants/ad-tag-config';
import type { AdTagProps } from '../types/ad-tag-types';

export const getAdTagInfo = ({ type, value }: AdTagProps) => {
  if (type === 'status') {
    return AD_TAG_CONFIG.status[value as AdStatus];
  }

  if (type === 'priority') {
    return AD_TAG_CONFIG.priority[value as AdPriority];
  }

  return { color: 'default', label: 'Не определено' };
};
