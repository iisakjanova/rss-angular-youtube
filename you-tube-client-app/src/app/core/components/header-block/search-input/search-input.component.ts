import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search/search.service';
import { YoutubeApiService } from 'src/app/youtube/services/youtube/youtube-api.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  searchTerm = '';

  searchInput$ = new Subject<string>();

  constructor(private searchService: SearchService, private youtubeApiService: YoutubeApiService) {
    this.searchInput$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe((term) => {
        if (term.length >= 3) {
          this.youtubeApiService.search(term).subscribe((results) => {
            console.log(results);
          });

          this.searchService.displaySearchResults();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInputChange() {
    this.searchInput$.next(this.searchTerm);
  }
}
