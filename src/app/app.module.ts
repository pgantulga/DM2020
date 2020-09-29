import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdModule} from './md/md.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from './layout/layout.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore

export class AppModule { }
