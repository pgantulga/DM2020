import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Observable} from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import {AskDialogComponent} from '../../layout/ask-dialog/ask-dialog.component';

@Component({
  selector: 'app-admin-delegates',
  templateUrl: './admin-delegates.component.html',
  styleUrls: ['./admin-delegates.component.scss']
})
export class AdminDelegatesComponent implements OnInit {
  allDelegates: Observable<any>;
  allOrders: Observable<any>;
  displayedColumns: string[] = ['date', 'payment', 'isPaid', 'company', 'invoice', 'total', 'action'];
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
}
