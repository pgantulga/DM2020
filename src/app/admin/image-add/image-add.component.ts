import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface Image {
  type: string;
  detail: string;
  embedUrl: string;
}
@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.scss']
})
export class ImageAddComponent{
  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: Image) { }
  cancel(): void {
    this.dialogRef.close();
  }
}
