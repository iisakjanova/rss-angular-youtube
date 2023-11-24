import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YouTubeModule),
    canMatch: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [authGuard],
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then((m) => m.FavoriteModule),
    canMatch: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
