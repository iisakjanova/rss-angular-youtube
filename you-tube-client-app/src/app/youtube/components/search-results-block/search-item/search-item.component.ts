import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { CustomCard } from 'src/app/admin/admin.model';

import { addToFavourite, deleteCustomCard, removeFromFavourite } from '../../../../redux/actions/admin.actions';
import { selectFavoriteIds } from '../../../../redux/selectors/admin.selectors';
import { SearchItem } from '../models/search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() item!: SearchItem | null;

  @Input() card!: CustomCard;

  isFavourite$!: Observable<boolean>;

  constructor(private store: Store) {}

  getButtonId(): string {
    return typeof this.item?.id === 'object' ? this.item.id.videoId || '' : this.item?.id || this.card.id;
  }

  ngOnInit(): void {
    this.isFavourite$ = this.store.select(selectFavoriteIds).pipe(
      map((favoriteIds) => {
        const videoId = typeof this.item?.id === 'object' ? this.item.id.videoId : this.item?.id;
        return !!videoId && !!favoriteIds.find((item) => item === videoId);
      }),
    );
  }

  deleteCard(cardId: string) {
    this.store.dispatch(deleteCustomCard({ cardId }));
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
