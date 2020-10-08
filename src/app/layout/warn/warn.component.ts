import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {
  @Input() articleId: any;
  article: Observable<any>;
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle(this.articleId);
    // 'CfKV11itscvgZydEjVxL' for exhibition
    // '0gQ7IgiTkUuPINjJv3K8' fro registration
  }

}
