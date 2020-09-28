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

@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
    SectionCardComponent,
    ItemCardComponent,
    FooterComponent
  ],
  exports: [
    ShellComponent,
    NavbarComponent,
    SectionCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
