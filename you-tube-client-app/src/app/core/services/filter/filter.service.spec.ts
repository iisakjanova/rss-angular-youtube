import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial showFilters as false', () => {
    expect(service.showFilters).toBe(false);
  });

  it('should change showFilters to true', () => {
    service.toggleShowFilters();
    expect(service.showFilters).toBe(true);
  });

  it('should set searchTerm to a non-empty string', () => {
    const searchTerm = 'something';

    service.setSearchTerm(searchTerm);
    expect(service.searchTerm).toBe(searchTerm);
  });
});
