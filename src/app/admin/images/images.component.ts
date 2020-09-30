import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ImageAddComponent} from "../image-add/image-add.component";
import {ImageService} from "../../services/image.service";


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  type: string;
  detail: string;
  embedUrl: string;
  constructor(public dialog: MatDialog, public imageService: ImageService) { }
  ngOnInit(): void {
  }
  addImage(): any {
    const dialogRef = this.dialog.open(ImageAddComponent, {
      width: '500px',
      data: {
        type: this.type,
        detail: this.detail,
        embedUrl: this.embedUrl
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.imageService.addImage(result);
          console.log(result);
        }
      });
  }

}
