import { Component, OnInit } from '@angular/core';
import { user }    from './user';
@Component({
  selector: 'app-user-registration-component',
  templateUrl: './user-registration-component.component.html',
  styleUrls: ['./user-registration-component.component.css']
})
export class UserRegistrationComponentComponent implements OnInit {
langs: string[] = [
  'English',
  'French',
  'German',
]
  submitted = false;
  model = new user('phani','manchala','phanikumar.manchala@gmail.com','manchala','English');
  onSubmit() {
    this.submitted = true; 
    console.log(this.model.firstName);
   }
  

  constructor() { }

  ngOnInit() {
  }
  resetUser() {
    this.model = new user('','', '', '','');
  }

}
