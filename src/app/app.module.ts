import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeroCreatorComponent } from './chaos-folder/page-hero-creator/page-hero-creator.component';
import { PageHeroLibraryComponent } from './chaos-folder/page-hero-library/page-hero-library.component';
import { PageHeroBattleComponent } from './chaos-folder/page-hero-battle/page-hero-battle.component';
import { HeaderComponent } from './chaos-folder/header/header.component';
import { HeaerButtonComponent } from './chaos-folder/header-button/header-button.component';
import { PageMainComponent } from './chaos-folder/page-main/page-main.component';
import { LogoComponent } from './chaos-folder/logo/logo.component';
import { HeroCardComponent } from './chaos-folder/hero-card/hero-card.component';
import { FieldComponent } from './chaos-folder/field/field.component';
import { ButtonComponent } from './chaos-folder/button/button.component';
import { InputFieldComponent } from './chaos-folder/input-field/input-field.component';
import { InputFieldCharacteristicsComponent } from './chaos-folder/input-field-characteristics/input-field-characteristics.component';
import { FormsModule } from '@angular/forms';
import { InputFieldNumberComponent } from './chaos-folder/input-field-number/input-field-number.component';
import { SearchComponent } from './chaos-folder/search/search.component';
import { TitleComponent } from './chaos-folder/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeroCreatorComponent,
    PageHeroLibraryComponent,
    PageHeroBattleComponent,
    HeaderComponent,
    HeaerButtonComponent,
    PageMainComponent,
    LogoComponent,
    HeroCardComponent,
    FieldComponent,
    ButtonComponent,
    InputFieldComponent,
    InputFieldCharacteristicsComponent,
    InputFieldNumberComponent,
    SearchComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
