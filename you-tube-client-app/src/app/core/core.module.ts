import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header-block/header/header.component';
import { LoginInfoComponent } from './components/header-block/login-info/login-info.component';
import { LogoComponent } from './components/header-block/logo/logo.component';
import { SearchInputComponent } from './components/header-block/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header-block/settings-button/settings-button.component';
import { NotFoundMessageComponent } from './components/not-found-message/not-found-message.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    LoginInfoComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    NotFoundPageComponent,
    NotFoundMessageComponent,
  ],
  exports: [
    HeaderComponent,
    NotFoundPageComponent,
  ],
})
export class CoreModule {}
