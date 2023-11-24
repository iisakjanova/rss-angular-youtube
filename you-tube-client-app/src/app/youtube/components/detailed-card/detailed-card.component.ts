import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { addToFavourite, removeFromFavourite } from 'src/app/redux/actions/admin.actions';
import { selectFavoriteIds } from 'src/app/redux/selectors/admin.selectors';

import type { SearchItem } from '../search-results-block/models/search-item-model';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss'],
})
export class DetailedCardComponent implements OnInit {
  @Input() item!: SearchItem | undefined;

  isFavourite$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isFavourite$ = this.store.select(selectFavoriteIds).pipe(
      map((favoriteIds) => {
        const videoId = typeof this.item?.id === 'object' ? this.item.id.videoId : this.item?.id;
        return !!videoId && !!favoriteIds.find((item) => item === videoId);
      }),
    );
  }

  toggleFavourite() {
    const videoId = typeof this.item?.id === 'object' ? this.item.id.videoId || '' : this.item?.id || '';

    // Use take(1) to automatically unsubscribe after one emission
    this.isFavourite$.pipe(take(1)).subscribe((isFavourite) => {
      if (isFavourite) {
        this.store.dispatch(removeFromFavourite({ id: videoId }));
      } else {
        this.store.dispatch(addToFavourite({ id: videoId }));
      }
    });
  }
}
