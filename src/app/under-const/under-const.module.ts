import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderConstRoutingModule } from './under-const-routing.module';
import { UnderConstComponent } from './under-const/under-const.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';


// @ts-ignore
@NgModule({
  declarations: [UnderConstComponent],
  imports: [
    CommonModule,
    UnderConstRoutingModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class UnderConstModule { }
