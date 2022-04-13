import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../response.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() selectedType: any;
  @Input() weather!: Response;

  constructor() {}

  ngOnInit(): void {}
}
