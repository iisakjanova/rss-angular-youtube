import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCountComponent } from './views-count.component';

describe('ViewsCountComponent', () => {
  let component: ViewsCountComponent;
  let fixture: ComponentFixture<ViewsCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsCountComponent],
    });
    fixture = TestBed.createComponent(ViewsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view count', () => {
    const viewCount = '1000';
    component.viewCount = viewCount;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.views span:last-child');
    expect(element.textContent).toContain(viewCount);
  });

  it('should update when the view count input changes', () => {
    const initialViewCount = '1000';
    component.viewCount = initialViewCount;
    fixture.detectChanges();

    let element = fixture.nativeElement.querySelector('.views span:last-child');
    expect(element.textContent).toContain(initialViewCount);

    const updatedViewCount = '1500';
    component.viewCount = updatedViewCount;
    fixture.detectChanges();

    element = fixture.nativeElement.querySelector('.views span:last-child');
    expect(element.textContent).toContain(updatedViewCount);
  });
});
