import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})

export class AuthModule { }
