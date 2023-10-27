import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  showFilters = false;

  toggleShowFilters() {
    this.showFilters = !this.showFilters;
  }
}
