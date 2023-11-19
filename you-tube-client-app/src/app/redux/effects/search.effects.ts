import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError, debounceTime, distinctUntilChanged, mergeMap, takeUntil,
} from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search/search.service';
import { YoutubeApiService } from 'src/app/youtube/services/youtube/youtube-api.service';

import {
  addToList, componentDestroyed, fetchItemsSuccess, searchInput,
} from '../actions/admin.actions';

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
        mergeMap((results) => {
          // Extract video IDs from search results
          const videoIds = Object.keys(results);

          // Dispatch action to add videoIds to the state
          const addVideoIdsAction = addToList({ id: videoIds });

          // Dispatch fetchItemsSuccess action
          const fetchSuccessAction = fetchItemsSuccess({ items: results });

          // Call additional service method
          this.searchService.displaySearchResults();

          // Return the actions
          return [addVideoIdsAction, fetchSuccessAction];
        }),
        catchError(() => EMPTY),
      )),
    );
  });

  constructor(
    private actions$: Actions,
    private youtubeApiService: YoutubeApiService,
    private searchService: SearchService,
  ) {}
}
