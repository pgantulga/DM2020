import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NetworkingComponent} from './networking/networking.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkingRoutingModule { }
