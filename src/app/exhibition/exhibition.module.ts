import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ExhibitionComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class ExhibitionModule { }
