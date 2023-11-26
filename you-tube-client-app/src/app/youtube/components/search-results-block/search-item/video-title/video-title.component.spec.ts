import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleComponent } from './video-title.component';

describe('VideoTitleComponent', () => {
  let component: VideoTitleComponent;
  let fixture: ComponentFixture<VideoTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTitleComponent],
    });
    fixture = TestBed.createComponent(VideoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the video title', () => {
    const title = 'Video title';
    component.title = title;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.title');
    expect(element.textContent).toContain(title);
  });

  it('should update when the video title input changes', () => {
    const initialTitle = 'Title';
    component.title = initialTitle;
    fixture.detectChanges();

    let element = fixture.nativeElement.querySelector('.title');
    expect(element.textContent).toContain(initialTitle);

    const updatedTitle = 'New title';
    component.title = updatedTitle;
    fixture.detectChanges();

    element = fixture.nativeElement.querySelector('.title');
    expect(element.textContent).toContain(updatedTitle);
  });
});
