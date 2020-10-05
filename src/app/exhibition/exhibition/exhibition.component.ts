import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {
  article: Observable<any>
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('jcitLm9SERHOWvbOT8A3');
  }

}
