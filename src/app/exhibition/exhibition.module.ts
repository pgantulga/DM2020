import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from "../layout/layout.module";


@NgModule({
  declarations: [ExhibitionComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    MdModule,
    FlexLayoutModule,
    LayoutModule
  ]
})
export class ExhibitionModule { }
