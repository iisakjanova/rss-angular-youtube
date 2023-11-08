import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    CreateCardFormComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule { }
