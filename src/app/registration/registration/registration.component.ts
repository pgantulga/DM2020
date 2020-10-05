import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  article: Observable<any>;
  constructor(public articleService: ArticleService) { }
  ngOnInit(): void {
    this.article = this.articleService.getArticle('mdUyLCByvNoU9rbNzkhz');
  }

}
