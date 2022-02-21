import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoceRoutingModule } from './doce-routing.module';
import { DoceIndexComponent } from './index/doce-index.component';
import { DoceCreateComponent } from './create/doce-create.component';
import { DoceEditComponent } from './edit/doce-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoceIndexComponent,
    DoceCreateComponent,
    DoceEditComponent,
  ],
  imports: [
    CommonModule,
    DoceRoutingModule,
    FormsModule
  ]
})
export class DoceModule { }
