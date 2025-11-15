import type { ModerationHistoryList } from './moderator-types';
import type { Pagination } from './pagination-types';
import type { Seller } from './seller-types';

export interface Advertisement {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  status: AdStatus;
  priority: AdPriority;
  createdAt: string;
  updatedAt: string;
  images: string[];
  seller: Seller;
  characteristics: Record<string, string>;
  moderationHistory: ModerationHistoryList;
}

export interface AdvertisementResponse {
  ads: AdvertisementList;
  pagination: Pagination;
}

export interface AdvertisementParams {
  page: number;
  limit: number;
  status: AdStatus[];
  categoryId: number;
  minPrice: number | null;
  maxPrice: number | null;
  search: string;
  sortBy: 'createdAt' | 'price' | 'priority' | null;
  sortOrder: 'asc' | 'desc' | null;
}

export interface AdvertisementApproveResponse {
  message: string;
  ad: Advertisement;
}

export type AdStatus = 'pending' | 'approved' | 'rejected' | 'draft';
export type AdPriority = 'normal' | 'urgent';
export type AdvertisementList = Advertisement[];
