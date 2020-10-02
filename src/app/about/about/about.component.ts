import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  article: Observable<any>;

  constructor(public articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('HBHiqyWYXJambSW5icDe');
  }
  goToLink(url): void  {
    window.location.href = url;
  }

}
