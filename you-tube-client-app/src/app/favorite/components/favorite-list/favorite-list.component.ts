import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFavoriteItems } from 'src/app/redux/selectors/admin.selectors';
import { SearchItem } from 'src/app/youtube/components/search-results-block/search-item-model';

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
