import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from "../layout/layout.module";
import {AngularFireFunctionsModule, REGION} from '@angular/fire/functions';
import { OrderCompleteComponent } from './order-complete/order-complete.component';


@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent, OrderCompleteComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MdModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: REGION, useValue: 'us-central1' }
  ]
  // providers: [{
  //   provide: LOCALE_ID,
  //   useValue: 'mn-MN' // 'de-DE' for Germany, 'fr-FR' for France ...
  // },
  // ]
})
export class RegistrationModule { }
