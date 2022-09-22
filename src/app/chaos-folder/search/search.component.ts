import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() Search:EventEmitter<string> = new EventEmitter<string>();
  search:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.Search.emit(this.search);
  }

}
