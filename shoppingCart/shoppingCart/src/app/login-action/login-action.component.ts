import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-action',
  //selector: 'app-login-screen',
  templateUrl: './login-action.component.html',
  styleUrls: ['./login-action.component.css']
})
export class LoginActionComponent implements OnInit {
 values = '';
  constructor() { }

  ngOnInit() {
  }

onKeyUp(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value ;
  }

onKeyUpBlur(newItem: string) { // with type info
    this.values += (<HTMLInputElement>event.target).value ;
  }

 heroes: String[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
