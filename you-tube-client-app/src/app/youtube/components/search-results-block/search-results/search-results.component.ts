import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomCard } from 'src/app/admin/admin.model';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SortingService } from 'src/app/core/services/sort/sorting.service';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';
import { selectCustomCards, selectItems } from 'src/app/redux/selectors/admin.selectors';

import { SearchItem } from '../models/search-item-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  customCards$: Observable<CustomCard[]>;

  items$: Observable<SearchItem[]>;

  constructor(
    public searchService: SearchService,
    public sortingService: SortingService,
    public filterService: FilterService,
    public youtubeService: YoutubeService,
    private store: Store,
  ) {
    this.customCards$ = this.store.select(selectCustomCards);
    this.items$ = this.store.select(selectItems);
  }
}
