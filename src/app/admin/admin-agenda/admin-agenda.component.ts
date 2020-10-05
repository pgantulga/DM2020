import { Component, OnInit } from '@angular/core';
import {AgendaDialogComponent} from '../../agenda/agenda-dialog/agenda-dialog.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ArticleService} from '../../services/article.service';
import {MatDialog} from '@angular/material/dialog';
import {AgendaService} from '../../services/agenda.service';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AgendaItemAddComponent} from '../agenda-item-add/agenda-item-add.component';
import {SessionAddComponent} from '../session-add/session-add.component';

@Component({
  selector: 'app-admin-agenda',
  templateUrl: './admin-agenda.component.html',
  styleUrls: ['./admin-agenda.component.scss']
})
export class AdminAgendaComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  dialogWidth: string;
  items: Observable<any>;
  sessions: [
    {
      number: number
    }
  ];
  constructor(private breakpointObserver: BreakpointObserver,
              public agendaService: AgendaService,
              public dialog: MatDialog) { }
  ngOnInit(): void {
    this.isHandset$.subscribe(res => {
      this.dialogWidth = res ? '350px' : '850px';
    });
    this.items = this.agendaService.getItems();
    this.agendaService.getSessions()
      .subscribe(items => this.sessions = items);
  }
  openDialog(data): any {
    const dialogRef = this.dialog.open(AgendaItemAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.agendaService.addItem(result).then(() => {
        console.log('item added');
      });
    });
  }
  addSession(ev): any {
    const dialogRef = this.dialog.open(SessionAddComponent, {
      width: this.dialogWidth,
      height: '70%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.agendaService.addSession(result).then(() => {
          console.log('session added');
        });
      }
    });
  }

}
