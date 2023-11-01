import { Component } from '@angular/core';

import { SortingService } from '../../../../core/services/sort/sorting.service';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss'],
})
export class SortButtonsComponent {
  constructor(public sortingService: SortingService) {}

  toggleSortOrderAndSetCriteria(criteria: 'date' | 'views') {
    this.sortingService.toggleSortOrder();
    this.sortingService.setSortCriteria(criteria);
  }
}
