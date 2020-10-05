import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {
  article: Observable<any>;
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('CfKV11itscvgZydEjVxL');
  }

}