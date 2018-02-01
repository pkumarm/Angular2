import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginServiceService} from './../login-service.service';
import {trigger,state,style,transition,animation,keyframes} from '@angular/animations';
export const ROUTES: Routes = [];

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})

@NgModule({
imports: [
    LoginServiceService,
    RouterModule.forChild(ROUTES)
  ],
})
export class UserProfileComponentComponent implements OnInit {
  position = 'senior software engineer!..';
  personalDetails = {
    mail:'phanikumar.manchala@gmail.com',
    address:'Hyderabad',
    phone:'9059700730'
  };
  TeamMembers = ['TM1','TM2','TM3'];
  error = "expecting variable is not present";
  experience='3.10 years';
  isButtonDisable = false;
  isClickable=true;
  citiesFromService = [];
  buttonClickFunction(event){

    console.log('button click');
    console.log(event);
  }

  mouseEnterFunction(event){

    console.log('mouse entered');
    console.log(event);
  }
  constructor(private loginService:LoginServiceService) { 
    
  }

  ngOnInit() {
    console.log(this.loginService.cities);
    this.citiesFromService = this.loginService.myCities();
  }
}
