import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {MdModule} from '../md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MdModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegistrationModule { }
