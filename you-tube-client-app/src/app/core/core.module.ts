import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header-block/header/header.component';
import { LoginInfoComponent } from './components/header-block/login-info/login-info.component';
import { LogoComponent } from './components/header-block/logo/logo.component';
import { SearchInputComponent } from './components/header-block/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header-block/settings-button/settings-button.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInfoComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    NotFoundPageComponent,
  ],
  exports: [
    HeaderComponent,
    NotFoundPageComponent,
  ],
})
export class CoreModule {}
