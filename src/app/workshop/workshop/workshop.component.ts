import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  article: Observable<any>;

  constructor(public articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('V9h8UuKjrPwMvXwubFIi');
  }
  goToLink(url): void  {
    window.location.href = url;
  }

}
