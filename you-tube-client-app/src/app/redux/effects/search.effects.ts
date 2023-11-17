import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError, debounceTime, distinctUntilChanged, map, mergeMap, takeUntil,
} from 'rxjs/operators';
import { YoutubeApiService } from 'src/app/youtube/services/youtube/youtube-api.service';

import { componentDestroyed, fetchItemsSuccess, searchInput } from '../actions/admin.actions';

/* eslint-disable arrow-body-style */
@Injectable()
export class SearchEffects {
  searchInputEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchInput),
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.actions$.pipe(ofType(componentDestroyed))),
      mergeMap((action) => this.youtubeApiService.searchAndFetchDetails(action.payload).pipe(
        map((results) => fetchItemsSuccess({ items: results })),
        catchError(() => EMPTY),
      )),
    );
  });

  constructor(
    private actions$: Actions,
    private youtubeApiService: YoutubeApiService,
  ) {}
}
