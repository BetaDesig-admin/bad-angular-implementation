import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHeroBattleComponent } from './chaos-folder/page-hero-battle/page-hero-battle.component';
import { PageHeroCreatorComponent } from './chaos-folder/page-hero-creator/page-hero-creator.component';
import { PageHeroLibraryComponent } from './chaos-folder/page-hero-library/page-hero-library.component';
import { PageMainComponent } from './chaos-folder/page-main/page-main.component';

const routes: Routes = [{
  path:"",
  component:PageMainComponent
},{
  path:"battle",
  component:PageHeroBattleComponent
},{
  path:"lib",
  component:PageHeroLibraryComponent
},{
  path:"creator",
  component:PageHeroCreatorComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
