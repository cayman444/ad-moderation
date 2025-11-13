export interface ModerationHistory {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: ModeratorAction;
  reason: string | null;
  comment: string;
  timestamp: string;
}

export type ModeratorAction = 'approved' | 'rejected' | 'requestChanges';
export type ModerationHistoryList = ModerationHistory[];
