import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';

import { SearchService } from '../../../../core/services/search/search.service';
import { SortingService } from '../../../../core/services/sort/sorting.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(
    public searchService: SearchService,
    public sortingService: SortingService,
    public filterService: FilterService,
    public youtubeService: YoutubeService,
  ) {}
}
