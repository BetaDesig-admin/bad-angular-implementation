import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map, MonoTypeOperatorFunction, Observable, OperatorFunction, Subject, tap } from 'rxjs';
import { DummyDataBaseService } from 'src/app/dummy-data-base/dummy-data-base.service';
import { Characteristics, Hero } from '../hero.model';

const timer = 100;
@Component({
  selector: 'app-page-hero-battle',
  templateUrl: './page-hero-battle.component.html',
  styleUrls: ['./page-hero-battle.component.scss']
})
export class PageHeroBattleComponent implements OnInit {
  firstHero:BehaviorSubject<Hero | null> = new BehaviorSubject<Hero | null>(null);
  secondHero:BehaviorSubject<Hero | null> = new BehaviorSubject<Hero | null>(null);
  allHeroes:Hero[] | null = null;
  title:string = "VS"
  winner: number | null = null;

  constructor(private database:DummyDataBaseService) {
    database.GetAll().then(
      heroes => {
        this.allHeroes = heroes;
        this.firstHero.next(this.allHeroes[this.getRandomHeroIndex()]);
        this.secondHero.next( this.allHeroes[this.getRandomHeroIndex()]);
      }
    )

   }

  ngOnInit(): void {
  }

  getRandomHeroIndex():number {
    return (this.allHeroes) ? Math.floor(Math.random() * this.allHeroes.length) : 0;
  }

  getTitle():string {
    return this.title
  }

  fight(){
    if (this.winner != null){
      const oldwinner = this.winner;
      this.winner = null;
      if(oldwinner == 0 || oldwinner == 2) this.firstHero.next(this.allHeroes![this.getRandomHeroIndex()]);
      if(oldwinner == 0 || oldwinner == 1) this.secondHero.next( this.allHeroes![this.getRandomHeroIndex()]);
    } else {
      this.count = 0;
      this.updateSecrence();
    }
  }

  count:number = 0;
  updateSecrence (){
    if (this.count < secrence.length){
      setTimeout(
        ()=> {
          this.title = secrence[this.count]
          this.count ++;
          this.updateSecrence();
        }, timer
      )
    } else {
      setTimeout(
        ()=> {
          this.combat();
        }, timer
      )
    }
  }

  combat () {
    const char =characteristics[Math.floor(Math.random() * characteristics.length)];
    this.title = char;
    setTimeout(
      () => {
      combineLatest([this.firstHero,this.secondHero]).pipe(
        filter(([hero1,hero2])=> hero1 != null && hero2 != null) as OperatorFunction<[Hero | null, Hero | null], [Hero, Hero]>,
        map(([hero1,hero2])=> {
          switch (char){
            case "Strength": return this.findWinner(hero1.characteristics.strength,hero2.characteristics.strength);
            case "Speed": return  this.findWinner(hero1.characteristics.speed,hero2.characteristics.speed);
            case "Intelligence": return  this.findWinner(hero1.characteristics.intelligence,hero2.characteristics.intelligence);
            case "Magic": return  this.findWinner(hero1.characteristics.magic,hero2.characteristics.magic);
            case "Utilities": return  this.findWinner(hero1.characteristics.utilities,hero2.characteristics.utilities);
            case "Defence": return  this.findWinner(hero1.characteristics.defence,hero2.characteristics.defence);
            default: return 0;
          }
        })
      ).subscribe(
        winner => this.winner = winner
      )
      },
      timer
    )
  }

  findWinner(v1:number,v2:number): 0 | 1 | 2 {
    return (v1 == v2)
              ? 0
              : (v1 > v2)
                  ? 1
                  : 2
  }

}
const characteristics = [
  "Strength",
  "Speed",
  "Intelligence",
  "Magic",
  "Utilities" ,
  "Defence"
]

const secrence:string [] = [
  "5..",
  "4..",
  "3..",
  "2..",
  "1..",
  "FIGHT!",
]

