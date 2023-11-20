import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCustomCardComponent } from './detailed-custom-card.component';

describe('DetailedCustomCardComponent', () => {
  let component: DetailedCustomCardComponent;
  let fixture: ComponentFixture<DetailedCustomCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedCustomCardComponent],
    });
    fixture = TestBed.createComponent(DetailedCustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
