import { Injectable } from '@angular/core';
export interface Menu {
  name: string;
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }
  public topMenu: Menu [] = [
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
  ];
  public sideNavMenu: Menu [] = [
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
  ];
  public footerMenu: Menu [] = [
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
  ];
    public adminMenu: Menu [] = [
    {
      name: 'Articles',
      link: '/admin/articles'
    },
    {
      name: 'Agenda',
      link: ''
    },
      {
        name: 'Images',
        link: '/admin/images'
      }
  ];
}
