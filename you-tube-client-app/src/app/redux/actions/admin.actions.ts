import { createAction, props } from '@ngrx/store';
import type { CustomCard } from 'src/app/admin/admin.model';
import { SearchItem } from 'src/app/youtube/components/search-results-block/search-item-model';

export const addCustomCard = createAction(
  '[Admin] Add Card',
  props<{ card: CustomCard }>(),
);

export const deleteCustomCard = createAction(
  '[Admin] Delete Card',
  props<{ cardId: string }>(),
);

export const searchInput = createAction(
  '[Admin] Search Input',
  props<{ payload: string }>(),
);

export const fetchItemsSuccess = createAction(
  '[Admin] Fetch Items Success',
  props<{ items: SearchItem[] }>(),
);

export const componentDestroyed = createAction('[Admin] Component Destroyed');

export const addToFavourite = createAction(
  '[Admin] Add To Favourite',
  props<{ id: string }>(),
);

export const removeFromFavourite = createAction(
  '[Admin] Remove From Favourite',
  props<{ id: string }>(),
);
