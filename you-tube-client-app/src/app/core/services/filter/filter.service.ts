import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  showFilters = false;

  searchTerm = '';

  toggleShowFilters() {
    this.showFilters = !this.showFilters;
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
