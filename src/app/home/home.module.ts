import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MdModule} from "../md/md.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutModule} from "../layout/layout.module";
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
