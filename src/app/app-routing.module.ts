import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from './services/admin-guard.service';
import {AdminComponent} from './admin/admin/admin.component';
// import {UnderConstComponent} from './under-const/under-const/under-const.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationModule)
  },
  {
    path: 'exhibition',
    loadChildren: () => import('./exhibition/exhibition.module').then(m => m.ExhibitionModule)
  },
  {
    path: 'networking',
    loadChildren: () => import('./networking/networking.module').then(m => m.NetworkingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'workshop',
    loadChildren: () => import('./workshop/workshop.module').then( m => m.WorkshopModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
