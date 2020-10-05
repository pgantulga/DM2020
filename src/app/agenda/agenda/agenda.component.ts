import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AgendaService} from '../../services/agenda.service';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  items: Observable<any>;
  sessions: any;
  constructor(private breakpointObserver: BreakpointObserver,
              public agendaService: AgendaService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('agenda')
    this.items = this.agendaService.getItems();
    this.agendaService.getSessions()
      .subscribe(items => this.sessions = items);
  }

}
