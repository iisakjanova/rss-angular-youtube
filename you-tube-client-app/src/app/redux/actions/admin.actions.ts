import { createAction, props } from '@ngrx/store';
import type { CustomCard } from 'src/app/admin/admin.model';

export const addCustomCard = createAction(
  '[Admin] Add Card',
  props<{ card: CustomCard }>(),
);
