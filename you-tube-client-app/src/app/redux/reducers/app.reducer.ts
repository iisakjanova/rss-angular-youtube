import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../app.state';
import { adminReducer } from './admin.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  admin: adminReducer,
};
