import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-under-const',
  templateUrl: './under-const.component.html',
  styleUrls: ['./under-const.component.scss']
})
export class UnderConstComponent implements OnInit {
  video: string;
  @ViewChild('videoPlayer') vp: ElementRef;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.video = '../../../assets/header-loop.mp4';



    // this.vp.nativeElement.play();
  }
  goToLink(url): void  {
    window.location.href = url;
  }

}
