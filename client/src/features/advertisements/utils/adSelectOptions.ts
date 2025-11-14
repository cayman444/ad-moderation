import type { AdStatus, AdvertisementList } from '@/shared/api/types';

export const getStatusOptions = (): { label: string; value: AdStatus }[] => {
  return [
    {
      label: 'Одобрено',
      value: 'approved',
    },
    {
      label: 'На модерации',
      value: 'pending',
    },
    {
      label: 'Отклонено',
      value: 'rejected',
    },
    {
      label: 'Черновик',
      value: 'draft',
    },
  ];
};

export const getCategoryOptions = (adsList?: AdvertisementList) => {
  const categoryIds = new Set<number>();
  const result: { label: string; value: number }[] = [];

  adsList?.forEach(({ category, categoryId }) => {
    if (!categoryIds.has(categoryId)) {
      categoryIds.add(categoryId);
      result.push({ label: category, value: categoryId });
    }
  });

  return result;
};
