import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AdminGuard} from '../services/admin-guard.service';
import {AdminArticleComponent} from "./admin-article/admin-article.component";
import {AdminAddArticleComponent} from "./admin-add-article/admin-add-article.component";
import {ArticleViewComponent} from "./article-view/article-view.component";
import {ImagesComponent} from "./images/images.component";
import {AdminAgendaComponent} from './admin-agenda/admin-agenda.component';
import {AdminSpeakersComponent} from './admin-speakers/admin-speakers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'articles',
    component: AdminArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'articles/:id',
    component: ArticleViewComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'create-article',
    component: AdminAddArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'articles/:id/edit',
    component: AdminAddArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'images',
    component: ImagesComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'agenda',
    component: AdminAgendaComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'speakers',
    component: AdminSpeakersComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
