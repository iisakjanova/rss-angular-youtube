import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import data from '../../../../../assets/mock-response.json';
import { SearchService } from '../../../../core/services/search/search.service';
import { SortingService } from '../../../../core/services/sort/sorting.service';
import type { SearchItem } from '../search-item-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchItems: SearchItem[] = data.items;

  constructor(
    public searchService: SearchService,
    public sortingService: SortingService,
    public filterService: FilterService,
  ) {}
}
