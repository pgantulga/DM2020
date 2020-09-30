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


@NgModule({
  declarations: [
    AdminComponent,
    AdminArticleComponent,
    AdminAddArticleComponent,
    ArticleListComponent,
    ArticleViewComponent,
    ImagesComponent,
    ImageAddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ArticleListComponent
  ]
})
export class AdminModule { }
