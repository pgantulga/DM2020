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
  ],
  exports: [
    ShellComponent,
    NavbarComponent,
    SectionCardComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
