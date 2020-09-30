import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  article$: any;
  constructor(public route: ActivatedRoute, public articleService: ArticleService) {
  }
  ngOnInit(): void {
    this.article$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.articleService.getArticle(params.get('id'));
      })
    );
  }

}
