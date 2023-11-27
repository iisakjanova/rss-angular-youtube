import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { selectFavoriteItems } from '../../../redux/selectors/admin.selectors';
import { FavoriteListComponent } from './favorite-list.component';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteListComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectFavoriteItems, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should select favorite items from the store', () => {
    const mockFavoriteItems = [{
      kind: '',
      etag: '',
      id: { videoId: 'video123' },
      snippet: {
        publishedAt: '',
        channelId: '',
        title: '',
        description: '',
        thumbnails: {
          default: { url: '', width: 0, height: 0 },
          medium: { url: '', width: 0, height: 0 },
          high: { url: '', width: 0, height: 0 },
          standard: { url: '', width: 0, height: 0 },
          maxres: { url: '', width: 0, height: 0 },
        },
        channelTitle: '',
        tags: [],
        categoryId: '',
        liveBroadcastContent: '',
        localized: { title: '', description: '' },
        defaultAudioLanguage: '',
      },
      statistics: {
        viewCount: '',
        likeCount: '',
        dislikeCount: '',
        favoriteCount: '',
        commentCount: '',
      },
    }];

    store.overrideSelector(selectFavoriteItems, mockFavoriteItems);
    fixture.detectChanges();

    component.items$.subscribe((items) => {
      expect(items).toEqual(mockFavoriteItems);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
