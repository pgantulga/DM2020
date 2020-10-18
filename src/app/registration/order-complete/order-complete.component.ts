import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  article: Observable<any>;
  constructor(private articleServce: ArticleService) { }
  ngOnInit(): void {
    this.article = this.articleServce.getArticle('vOs3bXXqc5XKfWkpf0iv');
  }
}
