import {Component, Input, OnInit} from '@angular/core';
import {DefaultDialogComponent} from '../../layout/default-dialog/default-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ArticleService} from '../../services/article.service';
import {ImageService} from '../../services/image.service';
import {AgendaDialogComponent} from '../agenda-dialog/agenda-dialog.component';

@Component({
  selector: 'app-agenda-list-item',
  templateUrl: './agenda-list-item.component.html',
  styleUrls: ['./agenda-list-item.component.scss']
})
export class AgendaListItemComponent implements OnInit {
  @Input() item: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  dialogWidth: string;
  constructor(private breakpointObserver: BreakpointObserver,
              public articleService: ArticleService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(data): any {
    const dialogRef = this.dialog.open(AgendaDialogComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
}
