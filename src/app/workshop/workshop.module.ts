import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop/workshop.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import {MdModule} from '../md/md.module';
import {LayoutModule} from '../layout/layout.module';
import {SocialComponent} from '../layout/social/social.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import {YouTubePlayerModule} from "@angular/youtube-player";


@NgModule({
  declarations: [WorkshopComponent, VideoSectionComponent, VideoDialogComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    MdModule,
    FlexLayoutModule,
    LayoutModule,
    YouTubePlayerModule
  ]
})
export class WorkshopModule { }
