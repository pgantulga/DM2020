import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {ArticleService} from '../../services/article.service';
import {ImageService} from '../../services/image.service';
import {MatDialog} from '@angular/material/dialog';
import {VideoService} from "../../services/video.service";
import {DefaultDialogComponent} from "../../layout/default-dialog/default-dialog.component";
import {VideoDialogComponent} from "../video-dialog/video-dialog.component";

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {
  videos: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  dialogWidth: string;
  constructor(private breakpointObserver: BreakpointObserver,
              public articleService: ArticleService,
              public imageService: ImageService,
              public dialog: MatDialog,
              private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.videos = this.videoService.getAllVideos();
  }
  watchVideo(data): void {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      width: this.dialogWidth,
      // height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
}
