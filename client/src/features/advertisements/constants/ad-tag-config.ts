export const AD_TAG_CONFIG = {
  status: {
    approved: { color: 'green', label: 'Одобрено' },
    pending: { color: 'orange', label: 'На модерации' },
    rejected: { color: 'red', label: 'Отклонено' },
    draft: { color: 'orange', label: 'Требуются исправления' },
    requestChanges: { color: 'orange', label: 'Требуются исправления' },
  },
  priority: {
    normal: { color: 'blue', label: 'Обычный' },
    urgent: { color: 'red', label: 'Срочный' },
  },
} as const;
