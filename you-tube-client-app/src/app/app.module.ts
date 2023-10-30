import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BorderHighlightDirective } from './directives/border-highlight/border-highlight.directive';
import { FilterInputComponent } from './filtering-block/filter-input/filter-input.component';
import { FilteringComponent } from './filtering-block/filtering/filtering.component';
import { SortButtonsComponent } from './filtering-block/sort-buttons/sort-buttons.component';
import { HeaderComponent } from './header-block/header/header.component';
import { LoginInfoComponent } from './header-block/login-info/login-info.component';
import { LogoComponent } from './header-block/logo/logo.component';
import { SearchInputComponent } from './header-block/search-input/search-input.component';
import { SettingsButtonComponent } from './header-block/settings-button/settings-button.component';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { CommentsCountComponent } from './search-results-block/search-item/comments-count/comments-count.component';
import { CountersComponent } from './search-results-block/search-item/counters/counters.component';
import { DislikesCountComponent } from './search-results-block/search-item/dislikes-count/dislikes-count.component';
import { LikesCountComponent } from './search-results-block/search-item/likes-count/likes-count.component';
import { MoreButtonComponent } from './search-results-block/search-item/more-button/more-button.component';
import { SearchItemComponent } from './search-results-block/search-item/search-item.component';
import { VideoThumbnailComponent } from './search-results-block/search-item/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './search-results-block/search-item/video-title/video-title.component';
import { ViewsCountComponent } from './search-results-block/search-item/views-count/views-count.component';
import { SearchResultsComponent } from './search-results-block/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    LoginInfoComponent,
    FilteringComponent,
    SortButtonsComponent,
    FilterInputComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    VideoThumbnailComponent,
    CountersComponent,
    SortPipe,
    BorderHighlightDirective,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
