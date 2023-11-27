import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SortingService } from 'src/app/core/services/sort/sorting.service';
import { YoutubeService } from 'src/app/core/services/youtube/youtube.service';
import { AppState } from 'src/app/redux/app.state';
import { selectCustomCards, selectItems } from 'src/app/redux/selectors/admin.selectors';

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      providers: [
        SortingService,
        FilterService,
        YoutubeService,
        SearchService,
        provideMockStore<AppState>({
          selectors: [
            { selector: selectCustomCards, value: [] },
            { selector: selectItems, value: [] },
          ],
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select custom cards and items from the store', () => {
    const items = [{
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

    const customCards = [{
      id: 'card123',
      title: '',
      description: '',
      image: '',
      video: '',
      date: new Date(),
    }];

    // Set the store values
    store.overrideSelector(selectCustomCards, customCards);
    store.overrideSelector(selectItems, items);

    // Trigger change detection
    fixture.detectChanges();

    // Assert that the component properties are correctly set
    expect(component.customCards$).toEqual(of(customCards));
    expect(component.items$).toEqual(of(items));
  });
});
