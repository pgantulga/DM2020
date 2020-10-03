import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListItemComponent } from './agenda-list-item/agenda-list-item.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SessionComponent } from './session/session.component';
import { AgendaDialogComponent } from './agenda-dialog/agenda-dialog.component';


@NgModule({
  declarations: [AgendaComponent, AgendaListItemComponent, SessionComponent, AgendaDialogComponent],
  exports: [
    AgendaListItemComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MdModule,
    FlexLayoutModule
  ]
})
export class AgendaModule { }
