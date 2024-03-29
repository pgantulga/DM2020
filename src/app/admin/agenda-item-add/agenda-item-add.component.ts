import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SpeakerService} from '../../services/speaker.service';
export interface AgendaItem {
  title: string;
  start: any;
  end: any;
  owner: any;
  kind: string;
  session: number;
  description: string;
  people: [];
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
    0, 1, 2, 3, 4
  ];
  temp: any;
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
        kind: 'presentation',
        session: null,
        description: null,
        people: [],
      };
    } else {
      this.data.people = [];
      this.update = true;
    }
    this.speakerService.getSpeakers()
      .subscribe( items => {
        this.peoples = items;
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addPanelist(): void {
    // @ts-ignore
    this.data.people.push(this.temp);
    this.temp = '';
  }
}

