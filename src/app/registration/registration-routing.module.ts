import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {OrderCompleteComponent} from './order-complete/order-complete.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'order-complete',
    component: OrderCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
