import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {RouteService} from '../../services/route-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  topMenu: any;
  currentRoute: any;
  constructor(public menuService: MenuService, public router: Router, public routeService: RouteService) { }
  ngOnInit(): void {
    this.topMenu = this.menuService.topMenu;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe( (e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
      });
  }
}
