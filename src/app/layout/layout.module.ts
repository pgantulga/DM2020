import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShellComponent} from './shell/shell.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SectionCardComponent} from './section-card/section-card.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from "@angular/router";
import { ItemCardComponent } from './item-card/item-card.component';
import { FooterComponent } from './footer/footer.component';
import { SnackComponent } from './snack/snack.component';
import { DefaultDialogComponent } from './default-dialog/default-dialog.component';
import { ImageWrapperComponent } from './image-wrapper/image-wrapper.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';
import { SponsorSectionComponent } from './sponsor-section/sponsor-section.component';
import { SocialComponent } from './social/social.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { WarnComponent } from './warn/warn.component';
import { SpeakerCardComponent } from './speaker-card/speaker-card.component';
import { DiscountComponent } from './discount/discount.component';

@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
    SectionCardComponent,
    ItemCardComponent,
    FooterComponent,
    SnackComponent,
    DefaultDialogComponent,
    ImageWrapperComponent,
    VideoWrapperComponent,
    SponsorSectionComponent,
    SocialComponent,
    SpeakerListComponent,
    ProfileImageComponent,
    SpeakerComponent,
    WarnComponent,
    SpeakerCardComponent,
    DiscountComponent,
  ],
  exports: [
    ShellComponent,
    NavbarComponent,
    SectionCardComponent,
    SpeakerListComponent,
    VideoWrapperComponent,
    WarnComponent,
    SpeakerCardComponent,
    SponsorSectionComponent,
    DiscountComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
