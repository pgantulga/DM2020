import {Component, Input, OnInit} from '@angular/core';
import {AgendaDialogComponent} from '../../agenda/agenda-dialog/agenda-dialog.component';
import {AgendaItemAddComponent} from '../../admin/agenda-item-add/agenda-item-add.component';
import {SpeakerComponent} from '../speaker/speaker.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ArticleService} from '../../services/article.service';
import {AgendaService} from '../../services/agenda.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {RouteService} from '../../services/route-service.service';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {SpeakerAddComponent} from '../../admin/speaker-add/speaker-add.component';
import {SpeakerService} from '../../services/speaker.service';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit {
  @Input() item: any;
  @Input() route: any;
  dialogWidth: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
              public speakerService: SpeakerService,
              public dialog: MatDialog,
              public router: Router,
             ) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(res => {
      this.dialogWidth = res ? '350px' : '850px';
    });
  }

  openDialog(data): any {
    if (this.route === 'admin') {
      this.edit(data);
    } else {
      const dialogRef = this.dialog.open(SpeakerComponent, {
        width: this.dialogWidth,
        height: '70%',
        data
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ${result}');
      });
    }
  }

  edit(data): any {
    const dialogRef = this.dialog.open(SpeakerAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Data to edit:' + result);
        this.speakerService.updateSpeaker(result);
      }
    });
  }
}
