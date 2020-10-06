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
import { DialogComponent } from './shared/dialog/dialog.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore

export class AppModule { }
