import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {RegistrationService} from '../../services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  article: Observable<any>;
  toc: Observable<any>;
  termsForm: FormGroup;
  paymentForm: FormGroup;
  registrations = [];
  orderDataForum = [];
  orderDataOnline = [];
  displayedColumns: string[] = ['price', 'qty', 'subtotal'];
  constructor(public articleService: ArticleService, private formBuilder: FormBuilder, private registrationService: RegistrationService) { }
  ngOnInit(): void {
    this.termsForm = this.formBuilder.group({
      isAccepted: [false]
    });
    this.paymentForm = this.formBuilder.group({
      paymentType: ['invoice'],
      invoiceEmail: ['', Validators.required],
      invoiceCompany: ['', Validators.required]
    })
    this.toc = this.articleService.getArticle('0gQ7IgiTkUuPINjJv3K8');
    this.addRegistration();
    this.article = this.articleService.getArticle('mdUyLCByvNoU9rbNzkhz');
  }
  addRegistration(): any {
    const count = this.registrations.length + 1 ;
    this.registrations.push({
      selected: 'forum',
      firstName: 'as dfasdf',
      lastName: 'asdfasdf',
      company: 'as dfasdf',
      industry: 'as dfasdf',
      phone: 'as dfasdf',
      email: 'as dfasdf',
    });
  }
  goForward(stepper: MatStepper): any{
    stepper.next();
  }
  orderDone(stepper: MatStepper): any {
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
  finishStep(): any {
    this.registrationService.saveOrder(this.orderDataOnline, this.orderDataForum, this.paymentForm.value)

  }

}
