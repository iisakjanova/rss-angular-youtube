import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/admin/admin.model';
import { addToFavourite, deleteCustomCard, removeFromFavourite } from 'src/app/redux/actions/admin.actions';

import { SearchItem } from '../search-item-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: SearchItem | null;

  @Input() card!: CustomCard;

  isFavourite = false;

  constructor(private store: Store) {}

  deleteCard(cardId: string) {
    this.store.dispatch(deleteCustomCard({ cardId }));
  }

  toggleFavourite() {
    if (this.isFavourite) {
      this.store.dispatch(removeFromFavourite({ id: this.item?.id.videoId || '' }));
    } else {
      this.store.dispatch(addToFavourite({ id: this.item?.id.videoId || '' }));
    }

    this.isFavourite = !this.isFavourite;
  }
}
