import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from '../services/admin-guard.service';
import {AdminArticleComponent} from "./admin-article/admin-article.component";
import {AdminAddArticleComponent} from "./admin-add-article/admin-add-article.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'articles',
    component: AdminArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'create-article',
    component: AdminAddArticleComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
