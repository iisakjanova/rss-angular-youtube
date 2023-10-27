import { Component } from '@angular/core';

import data from '../../../assets/mock-response.json';
import type { SearchItem } from '../search-item-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchItems: SearchItem[] = data.items;
}
