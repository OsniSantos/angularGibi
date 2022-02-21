import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GibiCreateComponent } from './create/gibi-create.component';
import { GibiEditComponent } from './edit/gibi-edit.component';
import { GibiIndexComponent } from './index/gibi-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gibi-index' },
  { path: 'gibi-index', component: GibiIndexComponent },
  { path: 'gibi-create', component: GibiCreateComponent },
  { path: 'gibi-edit/:id', component: GibiEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GibiRoutingModule { }
