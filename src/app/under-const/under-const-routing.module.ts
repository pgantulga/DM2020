import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnderConstComponent} from './under-const/under-const.component';

const routes: Routes = [
  {
    path: '',
    component: UnderConstComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore

export class UnderConstRoutingModule { }
