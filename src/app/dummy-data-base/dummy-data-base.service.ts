import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Characteristics, Hero } from '../chaos-folder/hero.model';

const SERVERDELAY = 1000;
@Injectable({
  providedIn: 'root'
})
export class DummyDataBaseService {
  private lib:Hero[] = [Batman,Superman,Thor,Hulk,Deadpool,Storm];
  constructor() {




   }


  public Post(hero:Hero):Promise<void>{
    return new Promise<void>(
      (resolve,reject)=> {
        setTimeout(
          ()=> {
            if (this.lib.find(h => hero.name == h.name)) {
              reject("Hero with name allready exists");
            } else {
              this.lib.push(hero);
              resolve();
            }
          }, SERVERDELAY
        )
      }
    )
  }

  public Get(name:string):Promise<Hero> {
    return new Promise<Hero>(
      (resolve,reject)=> {
        setTimeout(
          ()=> {
            const index = this.lib.findIndex(h => name == h.name || name == h.aliese);
            if (index == -1) {
              reject("No hero with that name was found");
            } else {
              resolve( Object.assign({}, this.lib[index]));
            }
          }, SERVERDELAY
        )
      }
    )
  }

  public  GetAll():Promise<Hero[]>{
    return new Promise<Hero[]>(
      (resolve,reject)=> {
        setTimeout(
          ()=> {
            resolve(this.lib.map(x => Object.assign({}, x)));
          }, SERVERDELAY
        )
      }
    )
  }

  public Remove(name:string):Promise<void>{
    return new Promise<void>(
      (resolve,reject)=> {
        setTimeout(
          ()=> {
            const index = this.lib.findIndex(h => name == h.name);
            if (index == -1) {
              reject("No hero with that name was found");
            } else {
              this.lib.splice(index,1);
              resolve();
            }
          }, SERVERDELAY
        )
      }
    )
  }

  public Put(oldName:string, hero:Hero):Promise<void>{
    return new Promise<void>(
      (resolve,reject)=> {
        setTimeout(
          ()=> {
            if (this.lib.find(h => oldName == h.name)) {
              this.lib = this.lib.map(h=>(h.name != oldName) ? h : hero);
              resolve();
            } else {
              reject("Hero with name allready exists");
            }
          }, SERVERDELAY
        )
      }
    )
  }







}


const Batman:Hero = new Hero("Bruce Wayne","black","white","earth",new Characteristics(3,2,4,1,4,3),"Batman");
const Superman:Hero = new Hero("Clark Kent","red","blue","krypton",new Characteristics(5,4,2,3,1,4),"Superman");


const Thor:Hero = new Hero("Thor","gold","brown","askard",new Characteristics(4,3,2,3,2,4));
const Hulk:Hero = new Hero("Bruce Banner","green","blue","earth",new Characteristics(4,3,1,1,1,5),"Hulk");


const Deadpool:Hero = new Hero("Wade Wilson","Red","Black","earth",new Characteristics(3,3,3,1,3,5),"Deadpool");
const Storm:Hero = new Hero("Ororo Munroe","white","blue","earth",new Characteristics(1,2,4,5,2,3),"Storm");
