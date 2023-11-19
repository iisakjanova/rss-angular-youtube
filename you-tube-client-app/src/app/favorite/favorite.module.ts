import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';



@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
  ]
})
export class FavoriteModule { }
