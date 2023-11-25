import { TestBed } from '@angular/core/testing';

import { SortingService } from './sorting.service';

describe('SortingService', () => {
  let service: SortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial sort order as "asc"', () => {
    expect(service.sortOrder).toBe('asc');
  });

  it('should have initial sort criteria as "date"', () => {
    expect(service.sortCriteria).toBe('date');
  });

  it('should toggle sort order from "asc" to "desc"', () => {
    service.toggleSortOrder();
    expect(service.sortOrder).toBe('desc');
  });

  it('should set sort criteria to "views"', () => {
    service.setSortCriteria('views');
    expect(service.sortCriteria).toBe('views');
  });
});
