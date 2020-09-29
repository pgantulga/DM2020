import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {RouteService} from "../../services/route-service.service";

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
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  currentRoute: string;
  constructor(public breakpointObserver: BreakpointObserver, public router: Router, public routeService: RouteService) {
    this.getLayoutType(this.currentRoute);

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe( (e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
        this.currentLayoutObj = this.routeService.getLayout(this.currentRoute);
      });
  }
  getLayoutType(currentRoute): any {
    this.currentLayoutObj = this.routeService.getLayout(currentRoute);
  }
}
