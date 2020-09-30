import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {
  articles: Observable<any>;
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAllArticles();
  }

}
