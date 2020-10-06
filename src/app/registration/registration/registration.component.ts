import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  article: Observable<any>;
  termsForm: FormGroup;
  delegateForm: FormGroup;
  types: [
    {
      name: 'Forum delegate',
      value: 'forum'
    },
    {
      name: 'Online delegate',
      value: 'online'
    }
  ]
  selected: any

  constructor(public articleService: ArticleService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.delegateForm = this.formBuilder.group({
      selected: ['1'],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      industry: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.termsForm = this.formBuilder.group({

    })
    this.article = this.articleService.getArticle('mdUyLCByvNoU9rbNzkhz');
  }

}
