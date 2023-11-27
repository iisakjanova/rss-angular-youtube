import { Component } from '@angular/core';

import { FilterService } from '../../../../core/services/filter/filter.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  searchTerm = '';

  constructor(public filterService: FilterService) {}

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  handleInputSubmit() {
    this.filterService.setSearchTerm(this.searchTerm);
  }
}
