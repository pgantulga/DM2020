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
      link: 'agenda'
    },
    {
      name: 'Registration',
      link: 'registration'
    },
    {
      name: 'Exhibition',
      link: 'exhibition'
    },
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Contact',
      link: 'contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
