import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCountComponent } from './comments-count.component';

describe('CommentsCountComponent', () => {
  let component: CommentsCountComponent;
  let fixture: ComponentFixture<CommentsCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsCountComponent],
    });
    fixture = TestBed.createComponent(CommentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the comments count', () => {
    const commentCount = '10';
    component.commentCount = commentCount;
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.comments span:last-child');
    expect(element.textContent).toContain(commentCount);
  });

  it('should update when the comments count input changes', () => {
    const initialCommentCount = '10';
    component.commentCount = initialCommentCount;
    fixture.detectChanges();

    let element = fixture.nativeElement.querySelector('.comments span:last-child');
    expect(element.textContent).toContain(initialCommentCount);

    const updatedCommentCount = '20';
    component.commentCount = updatedCommentCount;
    fixture.detectChanges();

    element = fixture.nativeElement.querySelector('.comments span:last-child');
    expect(element.textContent).toContain(updatedCommentCount);
  });

  it('should handle no comments input', () => {
    // Do not set commentsCount
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.comments span:last-child');
    expect(element.textContent).toContain('');
  });
});
