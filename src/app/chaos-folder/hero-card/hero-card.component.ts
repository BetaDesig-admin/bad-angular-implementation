import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() hero:Hero | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getName():string {
    return (this.hero!.aliese) ? this.hero!.aliese + " ( " + this.hero!.name + " )" : this.hero!.name;
  }

  getPlanet():string {
    return this.hero!.planet.substring(0,1).toLocaleUpperCase() + this.hero!.planet.substring(1);
  }

  getCharacteristic(char:string):string{
    switch (char){
      case "st": return this.hero!.characteristics.strength.toString();
      case "sp": return this.hero!.characteristics.speed.toString();
      case "i": return this.hero!.characteristics.intelligence.toString();
      case "m": return this.hero!.characteristics.magic.toString();
      case "u": return this.hero!.characteristics.utilities.toString();
      case "d": return this.hero!.characteristics.defence.toString();
      default: return "does not exist";
    }
  }

}
