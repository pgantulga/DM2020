import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListItemComponent } from './agenda-list-item/agenda-list-item.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SessionComponent } from './session/session.component';
import { AgendaDialogComponent } from './agenda-dialog/agenda-dialog.component';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [AgendaComponent, AgendaListItemComponent, SessionComponent, AgendaDialogComponent],
  exports: [
    AgendaListItemComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MdModule,
    FlexLayoutModule,
    SharedModule,
    LayoutModule,
  ]
})
export class AgendaModule { }
