import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DialogData} from "../../shared/dialog/dialog.component";
import {Observable} from "rxjs";

export interface DefaultDialogData {
  title: string;
  image: any;
  content: any;
  url: any;
}

@Component({
  selector: 'app-default-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.scss']
})
export class DefaultDialogComponent{
  image: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DefaultDialogData, public dialog: MatDialog) {
    this.image = data.image;
  }
  close() {
    this.dialog.closeAll();
  }

}
