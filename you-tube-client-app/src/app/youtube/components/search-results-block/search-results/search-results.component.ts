import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SortingService } from 'src/app/core/services/sort/sorting.service';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';

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
