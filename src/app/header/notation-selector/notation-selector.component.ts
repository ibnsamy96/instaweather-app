import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notation-selector',
  templateUrl: './notation-selector.component.html',
  styleUrls: ['./notation-selector.component.scss'],
})
export class NotationSelectorComponent implements OnInit {
  selectedType = 'C';

  constructor() {}

  ngOnInit(): void {}

  toggle(type: string) {
    console.log(type);

    this.selectedType = type;
  }
}
