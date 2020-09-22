import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnderConstComponent} from './under-const/under-const/under-const.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./under-const/under-const.module').then(m => m.UnderConstModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
