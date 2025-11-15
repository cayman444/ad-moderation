import type { AdPriority, AdStatus, ModeratorAction } from '@/shared/api/types';
import type { AD_TAG_CONFIG } from '../constants';

export interface AdTagProps {
  type: keyof typeof AD_TAG_CONFIG;
  value: AdStatus | AdPriority | ModeratorAction;
}
