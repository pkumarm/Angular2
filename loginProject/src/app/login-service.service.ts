import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {

  constructor() { }
  cities = ['Hyderabad','Banglore','Chennai'];
  myCities(){

    return this.cities;
  }
}
