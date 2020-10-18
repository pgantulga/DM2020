import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {RegistrationService} from '../../services/registration.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AngularFireFunctions} from '@angular/fire/functions';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  article: Observable<any>;
  toc: Observable<any>;
  thankYou: Observable<any>;
  termsForm: FormGroup;
  paymentForm: FormGroup;
  registrations = [];
  orderDataForum = [];
  orderDataOnline = [];
  displayedColumns: string[] = ['price', 'qty', 'subtotal'];
  orderCompleted = false;
  loading: boolean;
  rate: number;
  rateDate: any;
  key = '250246246246241249250227224219197203209217210204205219223215203219223199';
  totalAmount: number;
  latestInvoice: Observable<any>;
  showbank = false;
  constructor(public articleService: ArticleService,
              private formBuilder: FormBuilder,
              private registrationService: RegistrationService,
              private router: Router,
              private http: HttpClient,
              private fns: AngularFireFunctions) {
  }
  ngOnInit(): void {
    this.termsForm = this.formBuilder.group({
      isAccepted: [false]
    });
    this.paymentForm = this.formBuilder.group({
      paymentType: ['invoice'],
      invoiceEmail: [' ', Validators.required],
      invoiceCompany: [' ', Validators.required]
    });
    this.toc = this.articleService.getArticle('0gQ7IgiTkUuPINjJv3K8');
    this.addRegistration();
    this.article = this.articleService.getArticle('mdUyLCByvNoU9rbNzkhz');
    this.thankYou = this.articleService.getArticle('vOs3bXXqc5XKfWkpf0iv');
    this.latestInvoice = this.registrationService.getLatestInvoice();
  }
  addRegistration(): any {
    const count = this.registrations.length + 1 ;
    this.registrations.push({
      selected: 'forum',
      firstName: '',
      lastName: '',
      company: '',
      industry: '',
      phone: '',
      email: '',
    });
  }
  goForward(stepper: MatStepper): any{
    stepper.next();
  }
  orderDone(stepper: MatStepper): any {
    this.getRate();
    this.orderDataForum = [];
    this.orderDataOnline = [];
    this.registrationService.clearCart();
    this.registrationService.addToCard(this.registrations);
    const items = this.registrationService.getItems();
    if (items.length > 0) {
      this.orderDataForum = this.orderDataForum.concat(this.registrationService.getOrderSummary()[0]);
      this.orderDataOnline = this.orderDataOnline.concat(this.registrationService.getOrderSummary()[1]);
      stepper.next();
    }
  }
  remove(index): any {
    this.registrations.splice(index, 1);
  }
  finishStep(invoiceNum): any {
    this.loading = true;
    console.log('started');
    this.registrationService.saveOrder(
      this.orderDataOnline[0],
      this.orderDataForum[0],
      this.paymentForm.value,
      invoiceNum,
      this.totalAmount)
      .then(() => {
        this.loading = false;
        if (this.paymentForm.value.paymentType === 'card') {
          this.showbank = true;
        } else {
          this.orderCompleted = true;
        }
      });
  }
  getRate(): any {
    const getRate = this.fns.httpsCallable('getRate');
    getRate({text: 'works', url: 'https://monxansh.appspot.com/xansh.json?currency=USD'}).toPromise().then(res => {
      const data = JSON.parse(res);
      this.rate = Math.floor(data[0].rate_float);
      this.rateDate = data[0].last_date;
    });
  }
  getTotalAmount(stepper: MatStepper): any {
    this.totalAmount = this.registrationService.getTotalAmount(this.orderDataOnline[0], this.orderDataForum[0], this.rate);
    stepper.next();
  }
  test(fun): any {
    console.log('works');
    fun();
  }
}

