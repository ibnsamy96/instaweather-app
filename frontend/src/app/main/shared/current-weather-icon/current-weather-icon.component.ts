import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather-icon',
  templateUrl: './current-weather-icon.component.html',
  styleUrls: ['./current-weather-icon.component.scss'],
})
export class CurrentWeatherIconComponent implements OnInit {
  @Input() iconCode!: string;

  constructor() {}

  ngOnInit(): void {}
}
