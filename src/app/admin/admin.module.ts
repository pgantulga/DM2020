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


@NgModule({
  declarations: [AdminComponent, AdminArticleComponent, AdminAddArticleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
