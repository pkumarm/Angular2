import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './Login-screen/login-screen.component';
import { LoginActionComponent } from './login-action/login-action.component';
import { RegistrationActionComponent } from './registration-action/registration-action.component';
import { appRouterModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginActionComponent,
    RegistrationActionComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
