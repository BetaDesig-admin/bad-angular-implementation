export class Hero {
  name:string;
  aliese?:string;
  mainColor:string;
  secondaryColor:string;
  planet:string;
  characteristics:Characteristics
  constructor(name:string,mainColor:string,secondaryColor:string,planet:string,char:Characteristics, alieas?:string){
    this.name = name;
    this.aliese = alieas;
    this.mainColor = mainColor;
    this.secondaryColor = secondaryColor;
    this.planet = planet;
    this.characteristics = char;
  }
}


export class Characteristics {
  strength: 1 | 2 | 3 | 4 | 5;
  speed: 1 | 2 | 3 | 4 | 5;
  intelligence: 1 | 2 | 3 | 4 | 5;
  magic: 1 | 2 | 3 | 4 | 5;
  utilities: 1 | 2 | 3 | 4 | 5;
  defence:  1 | 2 | 3 | 4 | 5;
  constructor(str: 1 | 2 | 3 | 4 | 5,speed: 1 | 2 | 3 | 4 | 5,int: 1 | 2 | 3 | 4 | 5,mag: 1 | 2 | 3 | 4 | 5,uti: 1 | 2 | 3 | 4 | 5,def: 1 | 2 | 3 | 4 | 5){
    this.strength = str;
    this.speed = speed;
    this.intelligence = int;
    this.magic = mag;
    this.utilities = uti;
    this.defence = def;
  }
}


export function emptyHero():Hero {
  return new Hero("","","","",new Characteristics(1,1,1,1,1,1))
}
