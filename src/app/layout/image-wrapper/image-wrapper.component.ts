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
  currentRoute: any;
  @Input() route: any;
  details: {
    title: string,
    subtitle: string,
    img: Observable<any>
  };
  constructor(public routeService: RouteService, public router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe( (e: any) => {
        this.currentRoute = this.routeService.getCurrentRoute(e.url);
        this.details = this.routeService.getHeaderDetails(this.currentRoute);
      });
    this.details = this.routeService.getHeaderDetails(this.route);
    // this.details.img.subscribe(str => {
    //   console.log(str);
    // });
  }



}
