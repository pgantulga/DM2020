import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop/workshop.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import {MdModule} from '../md/md.module';
import {LayoutModule} from '../layout/layout.module';
import {SocialComponent} from '../layout/social/social.component';


@NgModule({
  declarations: [WorkshopComponent, VideoSectionComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    MdModule,
    LayoutModule
  ]
})
export class WorkshopModule { }
