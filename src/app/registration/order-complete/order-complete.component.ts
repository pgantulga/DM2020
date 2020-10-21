import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  article: Observable<any>;
  success: string;
  transNumber: any;
  errorCode: any;
  errorDesc: any;
  cardNumber: any;
  signature: any;
  constructor(private articleService: ArticleService, private router: Router, private registrationService: RegistrationService) { }
  ngOnInit(): void {
    this.article = this.articleService.getArticle('QmC69CosGk2PVz665sLr');
    const url = this.router.url;
    console.log(window.location.href);
    const params = (new URL(window.location.href)).searchParams;
    this.success = params.get('success');
    this.transNumber = params.get('trans_number');
    this.errorCode = params.get('error_code');
    this.errorDesc = params.get('error_desc');
    this.signature = params.get('signature');
    // this.registrationService.updateOrder(this.success, this.transNumber, this.errorDesc);
    this.registrationService.updateOrder(this.success, this.transNumber, this.errorDesc);

  }
// /registration/order-complete?success=1&trans_number=149&error_code=306&error_desc=Cancelled&card_number=&signature=
}
