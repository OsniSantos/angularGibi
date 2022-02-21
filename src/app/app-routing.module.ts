import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cadernos',
    loadChildren: () => import('./components/caderno/caderno.module').then(c => c.CadernoModule)
  },
  {
    path: 'doces',
    loadChildren: () => import('./components/doce/doce.module').then(d => d.DoceModule)
  },
  {
    path: 'gibis',
    loadChildren: () => import('./components/gibi/gibi.module').then(d => d.GibiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
