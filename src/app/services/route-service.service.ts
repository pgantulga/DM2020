/* tslint:disable */
import { Injectable } from '@angular/core';
export interface PageDetails {
  title: string,
  subtitle: string
}

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }
  getCurrentRoute(url) {
    if (url.includes('home')) {
      return 'home';
    }
    if (url.includes('agenda')) {
      return 'agenda';
    }
    if (url.includes('login') || url.includes('register') || url.includes('welcome')) {
      return 'login';
    }
    if (url.includes('admin')) {
      return 'admin';
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
    console.log(route);
    switch (route) {
      case 'home':
        return {
          title: 'Home page',
          subtitle: 'Oct 30, 2020'
        };
      case 'agenda':
        return {
          title: 'Agenda',
          subtitle: 'Oct 30, 2020'
        }
    }
  }
}
