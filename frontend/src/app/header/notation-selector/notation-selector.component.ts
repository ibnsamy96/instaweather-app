import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-notation-selector',
  templateUrl: './notation-selector.component.html',
  styleUrls: ['./notation-selector.component.scss'],
})
export class NotationSelectorComponent implements OnInit {
  @Output() typeChanged = new EventEmitter<string>();

  selectedType = 'C';

  constructor() {}

  ngOnInit(): void {}

  toggle(type: string) {
    console.log(type);

    this.selectedType = type;

    this.typeChanged.emit(this.selectedType);
  }
}
