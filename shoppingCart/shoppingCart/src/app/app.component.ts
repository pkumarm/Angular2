import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './Login-screen/login-screen.component';
import { LoginActionComponent } from './login-action/login-action.component';
import { RegistrationActionComponent } from './registration-action/registration-action.component';
@Component({
  selector: 'app-root',
  template: '<app-login-screen></app-login-screen>', //this will redirect to login component html, here app-login-screen is the login component selector
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
}
