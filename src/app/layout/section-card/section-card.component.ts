import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {ArticleService} from "../../services/article.service";
import {ImageService} from "../../services/image.service";
import {MatDialog} from "@angular/material/dialog";
import {DefaultDialogComponent} from "../default-dialog/default-dialog.component";

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent implements OnInit {
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
              public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.vides =
    this.isHandset$.subscribe(res => {
      this.dialogWidth = res ? '350px' : '850px';
    });
  }
  openDialog(data): any {
    const dialogRef = this.dialog.open(DefaultDialogComponent, {
      width: this.dialogWidth,
      height: '70%',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }

}
