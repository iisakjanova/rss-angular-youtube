import { Component } from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  constructor(private searchService: SearchService) {}

  onSearchSubmit(event: Event) {
    event.preventDefault();
    this.searchService.displaySearchResults();
  }
}
