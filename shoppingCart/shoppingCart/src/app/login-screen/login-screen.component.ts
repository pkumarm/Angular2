import { Component, OnInit } from '@angular/core';
import { NavLinks } from './NavLinks';
import { internalNavLinks } from './internalNavLinks';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

NavigationLink:NavLinks[]= [
  {name:'Appliances',navObj:[
      {name:'Televisions',navUrl:'tv.html'},
      {name:'WashingMachines',navUrl:'washingmachines.html'},
      {name:'AirConditioners',navUrl:'ac.html'},
    ]
  },
   {name:'HomeFurniture',navObj:[
      {name:'Kitchen',navUrl:'kitchen.html'},
      {name:'Furniture',navUrl:'furniture.html'},
      {name:'Lightining',navUrl:'lightining.html'},
      ]
  },
   {name:'BooksStationery',navObj:[
      {name:'Books',navUrl:'books.html'},
      {name:'Stationery',navUrl:'stationery.html'},
      {name:'others',navUrl:'others.html'},
    ]
  }
]
}