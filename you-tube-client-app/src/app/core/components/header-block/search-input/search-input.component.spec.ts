import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let storeMock: { dispatch: jest.Mock };

  beforeEach(() => {
    storeMock = { dispatch: jest.fn() };

    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      providers: [{ provide: Store, useValue: storeMock }],
    });

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
  });

  it('should dispatch componentDestroyed action on ngOnDestroy', () => {
    // Call ngOnDestroy
    component.ngOnDestroy();

    // Expect that the dispatch method was called with the correct action
    expect(storeMock.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: '[Admin] Component Destroyed' }));
  });

  it('should dispatch searchInput action when onSearchInputChange is called with a searchTerm of length >= 3', () => {
    // Set a searchTerm with length >= 3
    component.searchTerm = 'testSearchTerm';

    // Call onSearchInputChange
    component.onSearchInputChange();

    // Expect that the dispatch method was called with the correct action
    expect(storeMock.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '[Admin] Search Input',
        payload: component.searchTerm,
      }),
    );
  });

  it('should not dispatch searchInput action when onSearchInputChange is called with a searchTerm of length < 3', () => {
    // Set a searchTerm with length < 3
    component.searchTerm = 'ab';

    // Call onSearchInputChange
    component.onSearchInputChange();

    // Expect that the dispatch method was not called
    expect(storeMock.dispatch).not.toHaveBeenCalled();
  });
});
