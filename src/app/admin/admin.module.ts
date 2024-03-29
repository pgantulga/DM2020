import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminAddArticleComponent } from './admin-add-article/admin-add-article.component';
import {MdModule} from "../md/md.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {QuillModule} from "ngx-quill";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ArticleListComponent} from "../layout/article-list/article-list.component";
import { ArticleViewComponent } from './article-view/article-view.component';
import { ImagesComponent } from './images/images.component';
import { ImageAddComponent } from './image-add/image-add.component';
import { AdminAgendaComponent } from './admin-agenda/admin-agenda.component';
import { AgendaItemAddComponent } from './agenda-item-add/agenda-item-add.component';
import { AdminSpeakersComponent } from './admin-speakers/admin-speakers.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import {LayoutModule} from '../layout/layout.module';
import {AgendaModule} from '../agenda/agenda.module';
import { SessionAddComponent } from './session-add/session-add.component';
import { AdminDelegatesComponent } from './admin-delegates/admin-delegates.component';
import { DelegateListComponent } from './delegate-list/delegate-list.component';
import { AdminVideoComponent } from './admin-video/admin-video.component';
import { VideoAddComponent } from './video-add/video-add.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminArticleComponent,
    AdminAddArticleComponent,
    ArticleListComponent,
    ArticleViewComponent,
    ImagesComponent,
    ImageAddComponent,
    AdminAgendaComponent,
    AgendaItemAddComponent,
    AdminSpeakersComponent,
    SpeakerAddComponent,
    SessionAddComponent,
    AdminDelegatesComponent,
    DelegateListComponent,
    AdminVideoComponent,
    VideoAddComponent,
    OrderListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdModule,
    FlexLayoutModule,
    QuillModule.forRoot({
      modules: {
        table: true
      }
    }),
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    AgendaModule
  ],
  exports: [
    ArticleListComponent
  ]
})
export class AdminModule { }
