import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.scss']
})
export class NetworkingComponent implements OnInit {
  article: Observable<any>;
  table1: Observable<any>;
  table2: Observable<any>;
  table3: Observable<any>;
  constructor(public articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('9Uneif69VC1MvOfh5SW9');
    this.table1 = this.articleService.getArticle('73KuIUud8GnVEV5EvT3w');
    this.table2 = this.articleService.getArticle('zjeKMGAjVMv2kEYygmkV');
    this.table3 = this.articleService.getArticle('AXZ0XLEO7riL9gyuoKQp');

  }
  goToLink(url): void  {
    window.location.href = url;
  }

}
