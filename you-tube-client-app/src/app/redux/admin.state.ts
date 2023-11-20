import type { CustomCard } from '../admin/admin.model';
import { SearchResponseNormalized } from '../youtube/services/youtube/youtube-api.service';

export interface AdminState {
  cards: CustomCard[];
  items: SearchResponseNormalized;
  list: string[];
  favorite: string[];
}

export const initialAdminState: AdminState = {
  cards: [],
  items: {},
  list: [],
  favorite: [],
};
