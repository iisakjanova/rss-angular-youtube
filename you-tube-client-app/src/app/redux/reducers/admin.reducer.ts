import { createReducer, on } from '@ngrx/store';

import {
  addCustomCard, addToFavourite, addToList, deleteCustomCard, fetchItemsSuccess, removeFromFavourite,
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
    favorite: [...state.favorite, id],
  })),
  on(removeFromFavourite, (state, { id }) => ({
    ...state,
    favorite: state.favorite.filter((itemId) => itemId !== id),
  })),
  on(addToList, (state, { id }): AdminState => ({
    ...state,
    list: [...state.list, ...id],
  })),
);
