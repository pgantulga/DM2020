import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Observable} from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import {AskDialogComponent} from '../../layout/ask-dialog/ask-dialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-admin-delegates',
  templateUrl: './admin-delegates.component.html',
  styleUrls: ['./admin-delegates.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminDelegatesComponent implements OnInit {
  allDelegates: Observable<any>;
  allOrders: Observable<any>;
  displayedColumns: string[] = ['date', 'payment', 'isPaid', 'company', 'invoice', 'total', 'desc' ,'action'];
  expandedElement: any;
  constructor(private registrationService: RegistrationService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.allDelegates = this.registrationService.getDelegates();
    this.allOrders = this.registrationService.getOrders();
  }
  openDialog(item): void {
    const dialogRef = this.dialog.open(AskDialogComponent, {
      width: '250px',
      data: {title: 'Delete order', question: 'Are you sure to delete this order?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrationService.removeOrder(item)
          .then( res => {
            console.log('Removed: ' + res);
          });
      }
    });
  }
  openDetail(item): any {
    console.log(item);
  }
}
