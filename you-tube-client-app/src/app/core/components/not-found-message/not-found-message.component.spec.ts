import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMessageComponent } from './not-found-message.component';

describe('NotFoundMessageComponent', () => {
  let component: NotFoundMessageComponent;
  let fixture: ComponentFixture<NotFoundMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundMessageComponent],
    });
    fixture = TestBed.createComponent(NotFoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
