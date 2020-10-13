import { Component, OnInit } from '@angular/core';
import {AgendaItemAddComponent} from '../agenda-item-add/agenda-item-add.component';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {AgendaService} from '../../services/agenda.service';
import {MatDialog} from '@angular/material/dialog';
import {SpeakerService} from '../../services/speaker.service';
import {SpeakerAddComponent} from '../speaker-add/speaker-add.component';

@Component({
  selector: 'app-admin-speakers',
  templateUrl: './admin-speakers.component.html',
  styleUrls: ['./admin-speakers.component.scss']
})
export class AdminSpeakersComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  dialogWidth: string;
  speakers: Observable<any>;
  constructor(private breakpointObserver: BreakpointObserver,
              public agendaService: AgendaService,
              public dialog: MatDialog,
              public speakerService: SpeakerService) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(res => {
      this.dialogWidth = res ? '350px' : '850px';
    });
    this.speakers = this.speakerService.getSpeakers();
  }
  openDialog(data): any {
    const dialogRef = this.dialog.open(SpeakerAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.speakerService.addSpeaker(result).then(() => {
        console.log('speaker added');
      });
    });
  }
}
