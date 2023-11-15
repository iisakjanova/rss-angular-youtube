import type { CustomCard } from '../admin/admin.model';

export interface AdminState {
  cards: CustomCard[];
}

export const initialAdminState: AdminState = {
  cards: [],
};
