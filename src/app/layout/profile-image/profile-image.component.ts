import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent{
  @Input() item: any;
  constructor() { }

}
