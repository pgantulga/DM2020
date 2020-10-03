import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.scss']
})
export class SpeakerAddComponent implements OnInit {
  data = {
    firstName: '',
    lastName: '',
    bio: '',
    position: null,
    honor: ''
  };
  constructor(public dialogRef: MatDialogRef<SpeakerAddComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
