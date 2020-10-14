import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VideoAddComponent} from '../video-add/video-add.component';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-admin-video',
  templateUrl: './admin-video.component.html',
  styleUrls: ['./admin-video.component.scss']
})
export class AdminVideoComponent implements OnInit {
  dialogWidth: string;
  videos: Observable<any>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map( result => result.matches),
      shareReplay()
    );
  constructor(private dialog: MatDialog,
              private breakpointObserver: BreakpointObserver,
              public videoService: VideoService) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(res => {
      this.dialogWidth = res ? '350px' : '850px';
    });
    this.videos = this.videoService.getAllVideos();
  }
  openDialog(data): any {
    const dialogRef = this.dialog.open(VideoAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videoService.addVideo(result).then(() => {
          console.log('video added');
        });
      }
    });
  }
  editDialog(data): any {
    const dialogRef = this.dialog.open(VideoAddComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videoService.update(result)
          .then(() => {
            console.log('Video updated');
          });
      }
    });
  }
}
