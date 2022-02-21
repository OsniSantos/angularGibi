import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadernoRoutingModule } from './caderno-routing.module';
import { CadernoCreateComponent } from './create/caderno-create.component';
import { CadernoIndexComponent } from './index/caderno-index.component';
import { CadernoEditComponent } from './edit/caderno-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadernoCreateComponent,
    CadernoIndexComponent,
    CadernoEditComponent,
  ],
  imports: [
    CommonModule,
    CadernoRoutingModule,
    FormsModule
  ]
})
export class CadernoModule { }
