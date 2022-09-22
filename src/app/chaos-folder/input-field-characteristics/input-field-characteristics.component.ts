import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Characteristics } from '../hero.model';

@Component({
  selector: 'app-input-field-characteristics',
  templateUrl: './input-field-characteristics.component.html',
  styleUrls: ['./input-field-characteristics.component.scss']
})
export class InputFieldCharacteristicsComponent implements OnInit {
  @Input() characteristics!:Characteristics;
  @Output() characteristicsChange:EventEmitter<Characteristics> = new EventEmitter<Characteristics>();

  constructor() { }

  ngOnInit(): void {
  }

  update(char:string,value:1|2|3|4|5){
    const newChars = this.characteristics;
    switch (char){
      case "st": newChars.strength = value; break;
      case "sp": newChars.speed = value; break;
      case "i": newChars.intelligence = value; break;
      case "m": newChars.magic = value; break;
      case "u": newChars.utilities = value; break;
      case "d": newChars.defence = value; break;
    }
    this.characteristics = newChars;
    this.characteristicsChange.emit(this.characteristics);
  }

  getCharacteristic(char:string):1|2|3|4|5{
    switch (char){
      case "st": return this.characteristics.strength;
      case "sp": return this.characteristics.speed;
      case "i": return this.characteristics.intelligence;
      case "m": return this.characteristics.magic;
      case "u": return this.characteristics.utilities;
      case "d": return this.characteristics.defence;
      default: return 1;
    }
  }
}
