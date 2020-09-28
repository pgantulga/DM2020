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
  ]
}
