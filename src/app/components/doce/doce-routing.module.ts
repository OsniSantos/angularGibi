import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoceCreateComponent } from './create/doce-create.component';
import { DoceEditComponent } from './edit/doce-edit.component';
import { DoceIndexComponent } from './index/doce-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'doce-index' },
  { path: 'doce-index', component: DoceIndexComponent },
  { path: 'doce-create', component: DoceCreateComponent },
  { path: 'doce-edit/:id', component: DoceEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoceRoutingModule { }
