import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, map, shareReplay} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {RouteService} from "../../services/route-service.service";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  currentLayoutObj: {
    layout1: boolean,
    layout2: boolean,
    layout3: boolean
  };
  sideMenu: Array<any>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  currentRoute: string;
  constructor(public breakpointObserver: BreakpointObserver,
              public router: Router,
              public route: ActivatedRoute,
              public routeService: RouteService,
              public menuService: MenuService) {
    this.getLayoutType(this.currentRoute);
    console.log(this.router.getCurrentNavigation())
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe( (e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
        this.currentLayoutObj = this.routeService.getLayout(this.currentRoute);
        this.sideMenu = this.getSideMenu(this.currentRoute);
      });

  }
  ngOnInit(): void {
    console.log('shell')
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd))
    //   .subscribe( (e: any) => {
    //     this.currentRoute = this.routeService.getCurrentRoute(e.url);
    //     this.currentLayoutObj = this.routeService.getLayout(this.currentRoute);
    //     this.sideMenu = this.getSideMenu(this.currentRoute);
    //   });
  }
  getLayoutType(currentRoute): any {
    this.currentLayoutObj = this.routeService.getLayout(currentRoute);
  }
  getSideMenu(route): any {
    return (route === 'admin') ? this.menuService.adminMenu : this.menuService.sideNavMenu;
  }
  close(close): any {
    return (this.currentRoute === 'admin') ? null : close();
  }
}
