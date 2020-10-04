import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AgendaItem} from '../agenda-item-add/agenda-item-add.component';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.scss']
})
export class SpeakerAddComponent implements OnInit {
  update = false
  constructor(public dialogRef: MatDialogRef<SpeakerAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data
              ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        firstName: '',
        lastName: '',
        bio: '',
        position: null,
        honor: ''
      };
    } else {
      this.update = true;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
