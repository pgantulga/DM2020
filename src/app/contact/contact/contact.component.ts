import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  article: Observable<any>;
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticle('bIKc3RCbVpfR5VcGF4Fu');
  }

}
