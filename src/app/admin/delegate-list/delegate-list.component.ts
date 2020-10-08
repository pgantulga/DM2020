import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delegate-list',
  templateUrl: './delegate-list.component.html',
  styleUrls: ['./delegate-list.component.scss']
})
export class DelegateListComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
