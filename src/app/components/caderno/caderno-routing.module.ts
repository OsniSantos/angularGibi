import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadernoCreateComponent } from './create/caderno-create.component';
import { CadernoEditComponent } from './edit/caderno-edit.component';
import { CadernoIndexComponent } from './index/caderno-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'caderno-index' },
  { path: 'caderno-index', component: CadernoIndexComponent },
  { path: 'caderno-create', component: CadernoCreateComponent },
  { path: 'caderno-edit/:id', component: CadernoEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadernoRoutingModule { }
