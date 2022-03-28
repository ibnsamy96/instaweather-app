import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() typeChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  informMainComponent(type: string) {
    this.typeChanged.emit(type);
  }
}
