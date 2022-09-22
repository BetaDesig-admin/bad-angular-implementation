import { Component, OnInit } from '@angular/core';
import { DummyDataBaseService } from 'src/app/dummy-data-base/dummy-data-base.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-page-hero-library',
  templateUrl: './page-hero-library.component.html',
  styleUrls: ['./page-hero-library.component.scss']
})
export class PageHeroLibraryComponent implements OnInit {
  heroes:Hero[] = [];

  constructor(private database:DummyDataBaseService) {
    database.GetAll().then(
      heroes => {
        this.heroes = heroes;
      }
    )
   }

  ngOnInit(): void {
  }

}
