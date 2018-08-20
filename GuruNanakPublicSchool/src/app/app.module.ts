import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, AppRoutingComponent} from './../shared/router/app-routing.module';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from '../app/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDatepickerModule.forRoot()
  ],
  providers: [

      //{
      //    provide: HTTP_INTERCEPTORS,
      //    useClass: AuthInterceptor,
      //    multi: true,
      //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
