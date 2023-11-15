import { createReducer, on } from '@ngrx/store';

import { addCustomCard } from '../actions/admin.actions';
import { AdminState, initialAdminState } from '../admin.state';

export const adminReducer = createReducer(
  initialAdminState,
  on(addCustomCard, (state, { card }): AdminState => ({
    ...state,
    cards: [...state.cards, card],
  })),
);
