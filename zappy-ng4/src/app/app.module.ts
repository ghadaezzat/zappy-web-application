import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Provider } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
