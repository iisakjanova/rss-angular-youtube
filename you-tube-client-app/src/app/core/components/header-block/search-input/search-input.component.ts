import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { componentDestroyed, searchInput } from 'src/app/redux/actions/admin.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnDestroy {
  searchTerm = '';

  constructor(private store: Store) {}

  ngOnDestroy() {
    this.store.dispatch(componentDestroyed());
  }

  onSearchInputChange() {
    if (this.searchTerm.length >= 3) {
      this.store.dispatch(searchInput({ payload: this.searchTerm }));
    }
  }
}
