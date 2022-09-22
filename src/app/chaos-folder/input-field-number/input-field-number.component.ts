import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-field-number',
  templateUrl: './input-field-number.component.html',
  styleUrls: ['./input-field-number.component.scss']
})
export class InputFieldNumberComponent implements OnInit {
  @Input() name!:string;
  @Input() value: 1|2|3|4|5 | undefined = undefined ;
  @Output() valueChange:EventEmitter<1|2|3|4|5> = new EventEmitter<1|2|3|4|5>();

  constructor() { }

  ngOnInit(): void {
  }
  onChange(value:1|2|3|4|5) {
    this.valueChange.emit(value);
  }

}
