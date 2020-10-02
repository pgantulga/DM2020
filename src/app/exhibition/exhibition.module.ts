import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ExhibitionComponent } from './exhibition/exhibition.component';


@NgModule({
  declarations: [ExhibitionComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule
  ]
})
export class ExhibitionModule { }
