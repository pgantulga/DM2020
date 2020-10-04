/* tslint:disable */
import { Injectable } from '@angular/core';
import {ImageService} from "./image.service";
import get = Reflect.get;
export interface PageDetails {
  title: string,
  subtitle: string
}

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(public imageService: ImageService) { }
  getCurrentRoute(url) {
    if (url.includes('home')) {
      return 'home';
    }
    if (url.includes('agenda') && (!url.includes('admin'))) {
      return 'agenda';
    }
    if (url.includes('login') || url.includes('register') || url.includes('welcome')) {
      return 'login';
    }
    if (url.includes('registration')){
      return 'registration'
    }
    if (url.includes('exhibition')) {
      return 'exhibition'
    }
    if (url.includes('admin')) {
      return 'admin';
    }
    if(url.includes('about')) {
      return 'about'
    }
    if(url.includes('contact')) {
      return 'contact'
    }
  }
  getLayout(route) {
    if (route === 'admin') {
      return {
        layout1: false,
        layout2: true,
        layout3: false
      };
    } else if (route === 'login') {
      return {
        layout1: false,
        layout2: false,
        layout3: true
      };
    } else {
      return {
        layout1: true,
        layout2: false,
        layout3: false
      };
    }
  }
  getHeaderDetails(route): any {
    switch (route) {
      case 'home':
        return {
          title: 'Home page',
          subtitle: 'Oct 30, 2020'
        };
      case 'agenda':
        return {
          title: 'Agenda',
          subtitle: 'Oct 30, 2020',
          img: this.imageService.getImage('agenda_header')
        };
      case 'registration':
        return {
          title: 'Registration',
          subtitle: 'Oct 30, 2020',
          img: this.imageService.getImage('registration_header')
        };
      case 'exhibition':
        return {
          title: 'Exhibition',
          subtitle: 'Oct 30, 2020',
          img: this.imageService.getImage('exhibition_header')
        };
      case 'about':
        return {
          title: 'About forum',
          subtitle: 'The 18th International Mining Investors Forum',
          img: this.imageService.getImage('about_header')
        };
      case 'contact':
        return  {
          title: 'Contact us',
          subtitle: 'Organizing committee',
          img: this.imageService.getImage('about_header')
        }
    }
  }
}
