import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  sortOrder: 'asc' | 'desc' = 'asc';

  sortCriteria: 'date' | 'views' = 'date';

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  setSortCriteria(criteria: 'date' | 'views') {
    this.sortCriteria = criteria;
  }
}
