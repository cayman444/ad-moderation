import type { ModeratorReason } from '@/shared/api/types';

export const AD_REASONS_REJECT_OPTIONS: {
  value: ModeratorReason;
  label: ModeratorReason;
}[] = [
  {
    value: 'Запрещенный товар',
    label: 'Запрещенный товар',
  },
  {
    value: 'Неверная категория',
    label: 'Неверная категория',
  },
  {
    value: 'Некорректное описание',
    label: 'Некорректное описание',
  },
  {
    value: 'Проблемы с фото',
    label: 'Проблемы с фото',
  },
  {
    value: 'Подозрение на мошенничество',
    label: 'Подозрение на мошенничество',
  },
  {
    value: 'Другое',
    label: 'Другое',
  },
];
