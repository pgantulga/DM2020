import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkingRoutingModule } from './networking-routing.module';
import { NetworkingComponent } from './networking/networking.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [NetworkingComponent],
  imports: [
    CommonModule,
    NetworkingRoutingModule,
    FlexLayoutModule
  ]
})
export class NetworkingModule { }
