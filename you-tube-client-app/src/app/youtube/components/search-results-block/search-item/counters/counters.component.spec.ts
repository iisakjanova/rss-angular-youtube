import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCountComponent } from '../comments-count/comments-count.component';
import { DislikesCountComponent } from '../dislikes-count/dislikes-count.component';
import { LikesCountComponent } from '../likes-count/likes-count.component';
import { ViewsCountComponent } from '../views-count/views-count.component';
import { CountersComponent } from './counters.component';

describe('CountersComponent', () => {
  let component: CountersComponent;
  let fixture: ComponentFixture<CountersComponent>;

  const statistics = {
    viewCount: '100',
    likeCount: '50',
    dislikeCount: '10',
    commentCount: '30',
    favoriteCount: '',
  };

  const emptyStatistics = {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    commentCount: '',
    favoriteCount: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountersComponent,
        ViewsCountComponent,
        LikesCountComponent,
        DislikesCountComponent,
        CommentsCountComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersComponent);
    component = fixture.componentInstance;
    component.statistics = statistics;
    fixture.detectChanges();
  });

  it('should render child components with correct inputs', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const viewsCount = fixture.nativeElement.querySelector('app-views-count');
      const likesCount = fixture.nativeElement.querySelector('app-likes-count');
      const dislikesCount = fixture.nativeElement.querySelector('app-dislikes-count');
      const commentsCount = fixture.nativeElement.querySelector('app-comments-count');

      expect(viewsCount).toBeTruthy();
      expect(viewsCount.getAttribute('ng-reflect-view-count')).toBe(statistics.viewCount);

      expect(likesCount).toBeTruthy();
      expect(likesCount.getAttribute('ng-reflect-like-count')).toBe(statistics.likeCount);

      expect(dislikesCount).toBeTruthy();
      expect(dislikesCount.getAttribute('ng-reflect-dislike-count')).toBe(statistics.dislikeCount);

      expect(commentsCount).toBeTruthy();
      expect(commentsCount.getAttribute('ng-reflect-comment-count')).toBe(statistics.commentCount);
    });
  });

  it('should render child components with correct inputs when some values are empty', () => {
    component.statistics = emptyStatistics;

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const viewsCount = fixture.nativeElement.querySelector('app-views-count');
      const likesCount = fixture.nativeElement.querySelector('app-likes-count');
      const dislikesCount = fixture.nativeElement.querySelector('app-dislikes-count');
      const commentsCount = fixture.nativeElement.querySelector('app-comments-count');

      expect(viewsCount).toBeTruthy();
      expect(viewsCount.getAttribute('ng-reflect-view-count')).toBe(emptyStatistics.viewCount);

      expect(likesCount).toBeTruthy();
      expect(likesCount.getAttribute('ng-reflect-like-count')).toBe(emptyStatistics.likeCount);

      expect(dislikesCount).toBeTruthy();
      expect(dislikesCount.getAttribute('ng-reflect-dislike-count')).toBe(emptyStatistics.dislikeCount);

      expect(commentsCount).toBeTruthy();
      expect(commentsCount.getAttribute('ng-reflect-comment-count')).toBe(emptyStatistics.commentCount);
    });
  });
});
