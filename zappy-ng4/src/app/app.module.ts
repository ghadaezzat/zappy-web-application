import { CustExtBrowserXhr } from './../../cust-ext-browser-xhr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Provider } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
