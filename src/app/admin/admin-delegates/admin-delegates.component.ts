import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-delegates',
  templateUrl: './admin-delegates.component.html',
  styleUrls: ['./admin-delegates.component.scss']
})
export class AdminDelegatesComponent implements OnInit {
  allDelegates: Observable<any>;
  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    this.allDelegates = this.registrationService.getDelegates();
  }

}
