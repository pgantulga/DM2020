import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdModule} from "../md/md.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ArticleListComponent} from "../layout/article-list/article-list.component";
import { MomentPipe } from './moment.pipe';
import { AgendaFilterPipe } from './agenda-filter.pipe';



@NgModule({
  declarations: [MomentPipe, AgendaFilterPipe],
  imports: [
    CommonModule,
    MdModule,
    FlexLayoutModule
  ],
  exports: [
    MomentPipe,
    AgendaFilterPipe
  ]
})
export class SharedModule { }
