import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
export const ROUTES: Routes = [];
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  animations:[]
})

@NgModule({
imports: [
    RouterModule.forChild(ROUTES)
  ],
})

export class LoginComponentComponent implements OnInit {
   isloggedin = false;
 login() {
    this.isloggedin = true; 
   }



  constructor() { }

  ngOnInit() {
  }

}
