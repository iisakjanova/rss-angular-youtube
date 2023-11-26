import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;
  let mockStore: { dispatch: jest.Mock; select: jest.Mock };

  beforeEach(() => {
    mockStore = { dispatch: jest.fn(), select: jest.fn() };

    TestBed.configureTestingModule({
      declarations: [SearchItemComponent],
      providers: [{ provide: Store, useValue: mockStore }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    component.item = {
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
    };
  });

  it('should create SearchItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get button id when item.id is an object with videoId', () => {
    const buttonId = component.getButtonId();
    expect(buttonId).toBe('video123');
  });
});
