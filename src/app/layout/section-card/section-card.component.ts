import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {ArticleService} from "../../services/article.service";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
  events: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public articleService: ArticleService, public imageService: ImageService) { }

  ngOnInit(): void {
    this.events = [
      {
        title: 'Conference',
        date: 'October 30, 2020',
        image: this.imageService.getImage('home_conference')
      },
      {
        title: 'Workshops',
        date: 'October 1-30, 2020',
        image: this.imageService.getImage('home_workshop')
      },
      {
        title: 'Exhibition',
        date: 'October 30, 2020',
        image: this.imageService.getImage('home_exhibition')
      }
    ];
   // this.getImage('home_workshop');
  }
  // async getImage(docId)  {
  //    const result = this.imageService.getImage(docId);
  //    console.log(result)
  // }
  // async getImage(docId): Promise<any> {
  //   const obj =  await this.imageService.getImage(docId);
  //   return obj.embedUrl;
  // }
}
