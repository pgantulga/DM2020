import {Component, Input, OnInit} from '@angular/core';
import {RouteService} from "../../services/route-service.service";
import {filter, map, switchMap} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.scss']
})
export class ImageWrapperComponent implements OnInit {
  // @Input() route: Observable<any>;
  currentRoute: any;
  url: Observable<any>
  details: {
    title: string,
    subtitle: string
  };
  constructor(public routeService: RouteService, public router: Router, public route: ActivatedRoute) {
    this.url = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)) as Observable<any>;
    // .subscribe((e: any) => {
    //   this.currentRoute =  this.routeService.getCurrentRoute(e.url);
    //   this.details = this.routeService.getHeaderDetails(this.currentRoute);
    // }
  }

  ngOnInit(): void {
    this.url.pipe(
      map((e: any) => this.routeService.getCurrentRoute(e.url))
    ).subscribe(route => this.currentRoute = route);
    this.route.url.subscribe(url => {
      console.log(url);
    });

  }



}
