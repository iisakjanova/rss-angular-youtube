import { createReducer, on } from '@ngrx/store';

import {
  addCustomCard, addToFavourite, deleteCustomCard, fetchItemsSuccess, removeFromFavourite,
} from '../actions/admin.actions';
import { AdminState, initialAdminState } from '../admin.state';

export const adminReducer = createReducer(
  initialAdminState,
  on(addCustomCard, (state, { card }): AdminState => ({
    ...state,
    cards: [...state.cards, card],
  })),
  on(deleteCustomCard, (state, { cardId }): AdminState => ({
    ...state,
    cards: state.cards.filter((card) => card.id !== cardId),
  })),
  on(fetchItemsSuccess, (state, { items }): AdminState => ({
    ...state,
    items,
  })),
  on(addToFavourite, (state, { id }): AdminState => ({
    ...state,
    favourite: [...state.favourite, id],
  })),
  on(removeFromFavourite, (state, { id }) => ({
    ...state,
    favourite: state.favourite.filter((itemId) => itemId !== id),
  })),
);
