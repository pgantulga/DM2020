import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SpeakerService} from '../../services/speaker.service';
export interface AgendaItem {
  title: string;
  start: any;
  end: any;
  owner: any;
  type: any;
  session: number;
  description: string;
  people: any;
}
@Component({
  selector: 'app-agenda-item-add',
  templateUrl: './agenda-item-add.component.html',
  styleUrls: ['./agenda-item-add.component.scss']
})
export class AgendaItemAddComponent implements OnInit {
  types = [
    'discussion',
    'presentation',
    'social'
  ];
  peoples: any;
  sessions = [
    1, 2, 3, 4
  ];
  update = false;
  constructor(public dialogRef: MatDialogRef<AgendaItemAddComponent>,
              public speakerService: SpeakerService,
              @Inject(MAT_DIALOG_DATA) public data: AgendaItem) { }
  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        title: '',
        start: '',
        end: '',
        owner: null,
        type: null,
        session: null,
        description: null,
        people: ''
      };
    } else {
      this.update = true;
    }
    this.speakerService.getSpeakers()
      .subscribe( items => {
        this.peoples = items;
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  };

}

