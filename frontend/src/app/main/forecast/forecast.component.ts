import { Component, Input, OnInit } from '@angular/core';
import { Response, HourWeather } from '../response.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() selectedType: any;
  @Input() weather!: Response;
  @Input() next12Hours!: HourWeather[];

  constructor() {}

  ngOnInit(): void {
    const weatherChecker = setInterval(() => {
      // console.log(this.coords);
      if (!this.weather) return;

      const date = new Date();
      const startHour = date.getHours();

      this.next12Hours = this.weather.forecast
        .reduce((acc, dayObj, dayIndex) => {
          if (dayIndex === 0) {
            dayObj.hours = dayObj.hours.slice(startHour);
            dayObj.hours[0].hour = 'Now';
          }
          acc = [...acc, ...(dayObj.hours as unknown as never)];
          return acc;
        }, [])
        .slice(0, 25);

      clearInterval(weatherChecker);
    }, 10);
  }
}
