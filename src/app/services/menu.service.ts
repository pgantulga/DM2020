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
      name: 'Home',
      link: 'home'
    },
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
      name: 'Conference agenda',
      link: 'agenda'
    },
    {
      name: 'Forum registration',
      link: 'registration'
    },
    {
      name: 'Exhibition',
      link: 'exhibition'
    },
    {
      name: 'About conference',
      link: 'about'
    },
    {
      name: 'Contact us',
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
      link: '/admin/agenda'
    },
      {
        name: 'Speakers',
        link: '/admin/speakers'
      },
      {
        name: 'Delegates',
        link: '/admin/delegates'
      },
      {
        name: 'Images',
        link: '/admin/images'
      }
  ];
}
