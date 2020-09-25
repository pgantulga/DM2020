import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  topMenu = [
    {
      name: 'Agenda',
      link: ''
    },
    {
      name: 'Registration',
      link: ''
    },
    {
      name: 'Exhibition',
      link: ''
    },
    {
      name: 'About',
      link: ''
    },
    {
      name: 'Contact',
      link: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
