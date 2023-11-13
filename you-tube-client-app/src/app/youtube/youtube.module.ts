import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomButtonComponent } from './components/custom-button/custom-button/custom-button.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { FilterInputComponent } from './components/filtering-block/filter-input/filter-input.component';
import { FilteringComponent } from './components/filtering-block/filtering/filtering.component';
import { SortButtonsComponent } from './components/filtering-block/sort-buttons/sort-buttons.component';
import { CommentsCountComponent } from './components/search-results-block/search-item/comments-count/comments-count.component';
import { CountersComponent } from './components/search-results-block/search-item/counters/counters.component';
import { DislikesCountComponent } from './components/search-results-block/search-item/dislikes-count/dislikes-count.component';
import { LikesCountComponent } from './components/search-results-block/search-item/likes-count/likes-count.component';
import { MoreButtonComponent } from './components/search-results-block/search-item/more-button/more-button.component';
import { SearchItemComponent } from './components/search-results-block/search-item/search-item.component';
import { VideoThumbnailComponent } from './components/search-results-block/search-item/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './components/search-results-block/search-item/video-title/video-title.component';
import { ViewsCountComponent } from './components/search-results-block/search-item/views-count/views-count.component';
import { SearchResultsComponent } from './components/search-results-block/search-results/search-results.component';
import { BorderHighlightDirective } from './directives/border-highlight/border-highlight.directive';
import { ButtonHighlightDirective } from './directives/button-highlight/button-highlight.directive';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    MoreButtonComponent,
    VideoTitleComponent,
    VideoThumbnailComponent,
    CountersComponent,
    CommentsCountComponent,
    DislikesCountComponent,
    LikesCountComponent,
    ViewsCountComponent,
    FilteringComponent,
    FilterInputComponent,
    SortButtonsComponent,
    SortPipe,
    SearchFilterPipe,
    BorderHighlightDirective,
    MainPageComponent,
    DetailedPageComponent,
    DetailedCardComponent,
    ButtonHighlightDirective,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CustomButtonComponent,
    YoutubeRoutingModule,
    HttpClientModule,
  ],
  exports: [FilteringComponent, SearchResultsComponent],
})
export class YouTubeModule {}
