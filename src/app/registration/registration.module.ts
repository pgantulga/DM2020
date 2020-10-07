import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {localeMn} from '@angular/common/locales/mn';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MdModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  // providers: [{
  //   provide: LOCALE_ID,
  //   useValue: 'mn-MN' // 'de-DE' for Germany, 'fr-FR' for France ...
  // },
  // ]
})
export class RegistrationModule { }
