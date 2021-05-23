import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PatientComponent } from './patient/patient.component';
//import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    PatientComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
