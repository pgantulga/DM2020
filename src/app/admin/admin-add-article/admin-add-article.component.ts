import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { config} from '../../shared/quill-config';
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../shared/dialog/dialog.component";
import {switchMap} from "rxjs/operators";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackComponent} from "../../layout/snack/snack.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.scss']
})
export class AdminAddArticleComponent implements OnInit {
  config: any;
  author: any;
  editing = false;
  oldValue: any;
  content = new FormControl('', [
    Validators.required
  ]);
  title = new FormControl('', [
    Validators.required
  ]);
  constructor(public authService: AuthService,
              public dialog: MatDialog,
              public articleService: ArticleService,
              public route: ActivatedRoute,
              public snackBar: MatSnackBar,
              public router: Router
              ) {
    this.route.paramMap.pipe(
      switchMap(params => {
        return params.get('id') ? this.articleService.getArticle(params.get('id')) : [];
      })
    ).subscribe((data: any) => {
      if (data) {
        this.oldValue = data;
        this.title.setValue(data.title);
        this.content.setValue(data.content);
        this.editing = true;
      }
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.author = user;
    });
    this.config = config;
  }
  onSubmit(): any {
    if (!this.editing) {
      // tslint:disable-next-line:no-shadowed-variable
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: 'Асуултыг нэмэх',
          content: ' Таны асуултыг системд нэмэх гэж байна',
        }
      });
      return dialogRef.afterClosed().subscribe( result => {
        if (result) {
          this.createArticle()
            .then(() => {
              this.snackBar.openFromComponent(SnackComponent, {
                data: 'Шинэ асуулт нэмэгдлээ.',
              });
              return this.router.navigate(['/admin/articles']);
            });
        }
      });
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Сануулах уу',
        content: 'Таны өөрчлөлтийг сануулах гэж байна'
      }
    });
    return dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveArticle()
          .then(() => {
            this.snackBar.openFromComponent(SnackComponent, {
              data: 'Санагдлаа',
            })
            return this.router.navigate(['/home'])
          });
      }
    });
  }
  createArticle(): any {
    return this.articleService.createArticle({
      title: this.title.value,
      content: this.content.value,
    }, this.author);
  }
  saveArticle(): any {
    return this.articleService.saveArticle( {
      title: this.title.value,
      content: this.content.value,
    }, this.author, this.oldValue);
  }
}
