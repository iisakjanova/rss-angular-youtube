import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial showResults as false', () => {
    expect(service.showResults).toBe(false);
  });

  it('should change showResults to true', () => {
    service.displaySearchResults();
    expect(service.showResults).toBe(true);
  });
});
