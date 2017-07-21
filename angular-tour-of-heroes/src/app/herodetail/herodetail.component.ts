import { Component, OnInit } from '@angular/core';
/*export class Hero {
  id: number;
  name: string;
}*/
import { Hero } from './hero';  /** importing Hero type from hero.ts */
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {  /** you are using export keyword because others can import this class */

  constructor() { }

  ngOnInit() {
  }

  title = 'Tour of Heroes';
  //hero = 'Windstorm'
  hero: Hero = {id: 1,name: 'Windstorm'};

  HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


selectedHero: Hero;

onSelect(selhero: Hero): void {
  this.selectedHero = selhero;
}
}
