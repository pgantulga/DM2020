import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SpeakerService} from '../../services/speaker.service';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.scss']
})
export class SessionAddComponent implements OnInit {
  update = false;
  people: any;
  constructor(public dialogRef: MatDialogRef<SessionAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public speakerService: SpeakerService
              ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        title: '',
        start: '',
        end: '',
        chair: null,
        number: 0
      };
    } else {
      this.update = true;
    }
    this.speakerService.getSpeakers().subscribe( items => {
      this.people = items;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  };

}
