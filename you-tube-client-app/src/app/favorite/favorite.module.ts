import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YouTubeModule } from '../youtube/youtube.module';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteListComponent,
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    YouTubeModule,
  ],
})
export class FavoriteModule { }
