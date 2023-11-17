import type { CustomCard } from '../admin/admin.model';
import { SearchItem } from '../youtube/components/search-results-block/search-item-model';

export interface AdminState {
  cards: CustomCard[];
  items: SearchItem[];
}

export const initialAdminState: AdminState = {
  cards: [],
  items: [],
};
