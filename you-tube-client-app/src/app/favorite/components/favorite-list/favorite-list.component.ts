import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchItem } from 'src/app/youtube/components/search-results-block/models/search-item-model';

import { selectFavoriteItems } from '../../../redux/selectors/admin.selectors';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent {
  items$: Observable<SearchItem[]>;

  constructor(
    private store: Store,
  ) {
    this.items$ = this.store.select(selectFavoriteItems);
  }
}
