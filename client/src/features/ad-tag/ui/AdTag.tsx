import { Tag } from 'antd';
import type { FC } from 'react';
import type { AdTagProps } from '../types/ad-tag-types';
import { getAdTagInfo } from '../utils/getAdTagInfo';

export const AdTag: FC<AdTagProps> = (adTagProps) => {
  const { color, label } = getAdTagInfo(adTagProps);

  return <Tag color={color}>{label}</Tag>;
};
