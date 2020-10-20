import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  article: Observable<any>;
  constructor(private articleService: ArticleService ) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('GDvM6JuZcxUTMhLgHPCL');
  }

}
