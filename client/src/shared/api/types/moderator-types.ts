export interface ModerationHistory {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: ModeratorAction;
  reason: ModeratorReason | null;
  comment: string;
  timestamp: string;
}

export type ModeratorReason =
  | 'Запрещенный товар'
  | 'Неверная категория'
  | 'Некорректное описание'
  | 'Проблемы с фото'
  | 'Подозрение на мошенничество'
  | 'Другое';
export type ModeratorAction = 'approved' | 'rejected' | 'requestChanges';
export type ModerationHistoryList = ModerationHistory[];
