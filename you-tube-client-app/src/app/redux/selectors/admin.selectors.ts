import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AdminState } from '../admin.state';

const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectCustomCards = createSelector(
  selectAdminState,
  (state) => state.cards,
);
