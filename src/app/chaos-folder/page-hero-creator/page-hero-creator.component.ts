import { Component, OnInit } from '@angular/core';
import { DummyDataBaseService } from 'src/app/dummy-data-base/dummy-data-base.service';
import { Characteristics, emptyHero, Hero } from '../hero.model';

@Component({
  selector: 'app-page-hero-creator',
  templateUrl: './page-hero-creator.component.html',
  styleUrls: ['./page-hero-creator.component.scss']
})
export class PageHeroCreatorComponent implements OnInit {
  hero:Hero | null = null;
  title:string = "Welcome";
  isNew:boolean = false;
  oldName:string = "";

  constructor(private database:DummyDataBaseService) { }

  getTitle():string {
    setTimeout(() => {
      this.title = "Hero Maker"
    }, 1000
    )
    return this.title;
  }


  ngOnInit(): void {
  }

  onSearch(search:string){
    this.database.Get(search).then(
      hero=> {
        this.hero = hero;
        this.oldName = this.hero.name;
        this.isNew = false;
        this.title = "Hero Found";
      }
    )

  }

  new() {
    this.isNew = true;
    this.hero = emptyHero();
  }
  delete() {
    this.database.Remove(this.oldName).then(()=> {
      this.oldName = "";
      this.hero = null;
      this.title = "Hero Deleted";
    })
  }
  update() {
    this.database.Put(this.oldName,this.hero!).then(
      ()=> {
        this.oldName = this.hero!.name;
        this.title = "Hero Updated";
      }
    )
  }

  create() {
    this.database.Post(this.hero!).then(()=>
      {
        this.isNew = false;
        this.oldName = this.hero!.name;
      }
    )
  }

  getCharacteristics():Characteristics {
    return this.hero!.characteristics;
  }
  setCharacteristics(char:Characteristics){
    this.hero!.characteristics = char;
  }

  onDeath():string {

    if (!this.hero) return "";
    const totalSkills = this.hero.characteristics.strength +
                        this.hero.characteristics.speed +
                        this.hero.characteristics.intelligence +
                        this.hero.characteristics.magic +
                        this.hero.characteristics.utilities +
                        this.hero.characteristics.defence;
    return totalSkills.toString();
  }
  getName():string {
    return this.hero?.name || ""
  }
  setName(name:string) {
    this.hero!.name = name;
  }
}
