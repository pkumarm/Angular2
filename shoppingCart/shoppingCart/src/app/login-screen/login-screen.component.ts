import { Component, OnInit } from '@angular/core';
import { NavLinks } from './NavLinks';
import { internalNavLinks } from './internalNavLinks';
import {FooterLinks} from './FooterLinks';
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

CorousalImages:String[] = [
  "offer1.jpg",
  "offer2.jpg",
  "offer3.jpg"
]

FooterLinks : FooterLinks[] = [
{linkName:'Contact Us' , link:'contactUs.html'},
{linkName:'About Us' , link:'aboutUs.html'},
{linkName:'Careers' , link:'careers.html'},
{linkName:'Shopping Stories' , link:'shoppingStories.html'},
{linkName:'FAQ' , link:'faq.html'},
{linkName:'Gift Card' , link:'giftCard.html'},
{linkName:'Sell Here' , link:'sellHere.html'},
//{linkName:'Track Your Order' , link:'trackYourOrder.html'},
//{linkName:'Free & Easy Returns' , link:'easyReturns.html'},
//{linkName:'Online Cancellations' , link:'cancellations.html'},
//{linkName:'Terms and Condition' , link:'terms.html'},
]

}