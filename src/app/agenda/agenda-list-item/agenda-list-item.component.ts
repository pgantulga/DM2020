import {Component, Input, OnInit} from '@angular/core';
import {DefaultDialogComponent} from '../../layout/default-dialog/default-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, map, shareReplay} from 'rxjs/operators';
import {ArticleService} from '../../services/article.service';
import {ImageService} from '../../services/image.service';
import {AgendaDialogComponent} from '../agenda-dialog/agenda-dialog.component';
import {AgendaItemAddComponent} from '../../admin/agenda-item-add/agenda-item-add.component';
import {RouteService} from '../../services/route-service.service';
import {NavigationEnd, Router} from '@angular/router';
import {AgendaService} from '../../services/agenda.service';

@Component({
  selector: 'app-agenda-list-item',
  templateUrl: './agenda-list-item.component.html',
  styleUrls: ['./agenda-list-item.component.scss']
})
export class AgendaListItemComponent{
  @Input() item: any;
  @Input() route: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  dialogWidth: string;
  currentRoute: any;
  constructor(private breakpointObserver: BreakpointObserver,
              public agendaService: AgendaService,
              public dialog: MatDialog,
              public router: Router,
              public routeService: RouteService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe( (e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
      });
  }
  openDialog(data): any {
    if (this.route === 'admin') {
      this.edit(data);
    } else {
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
  edit(data): any {
    const dialogRef = this.dialog.open(AgendaItemAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Data to edit:' + result);
        this.agendaService.update(result);
      }
    });
  }
}
