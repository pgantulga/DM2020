/* tslint:disable */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }
  getCurrentRoute(url) {
    if (url.includes('/home')) {
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
}
