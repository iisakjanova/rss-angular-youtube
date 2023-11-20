import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AdminState } from '../admin.state';

const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectCustomCards = createSelector(
  selectAdminState,
  (state) => state.cards,
);

export const selectCustomCardById = (itemId: string) => createSelector(
  selectAdminState,
  (state) => state.cards.find((card) => card.id === itemId),
);

export const selectItems = createSelector(
  selectAdminState,
  (state) => state.list.map((id) => state.items[id]).filter((item) => !!item),
);

export const selectItemById = (itemId: string) => createSelector(
  selectAdminState,
  (state) => state.items[itemId],
);

export const selectFavoriteItems = createSelector(
  selectAdminState,
  (state) => state.favorite.map((id) => state.items[id]).filter((item) => !!item),
);

export const selectFavoriteIds = createSelector(
  selectAdminState,
  (state) => state.favorite,
);
