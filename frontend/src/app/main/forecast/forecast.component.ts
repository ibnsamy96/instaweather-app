import { Component, Input, OnInit } from '@angular/core';
import { Response, HourWeather, DayWeather } from '../response.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() selectedType: any;
  @Input() weather!: Response;
  next24Hours!: HourWeather[];
  next16Days!: DayWeather[];
  isForecastPeriodHourly: boolean = true;

  constructor() {}

  ngOnInit(): void {
    const weatherChecker = setInterval(() => {
      // console.log(this.coords);
      if (!this.weather) return;

      const date = new Date();
      const startHour = date.getHours();

      this.next24Hours = this.weather.hourly_forecast
        .reduce((acc, dayObj, dayIndex) => {
          if (dayIndex === 0) {
            dayObj.hours = dayObj.hours.slice(startHour);
            dayObj.hours[0].hour = 'Now';
          }
          acc = [...acc, ...(dayObj.hours as unknown as never)];
          return acc;
        }, [])
        .slice(0, 25);

      // TODO create the daily instances template
      this.next16Days = this.weather.daily_forecast.reduce(
        (acc, dayObj, dayIndex) => {
          if (dayIndex !== 0)
            dayObj.date = `${new Date(dayObj.date).getDate()}/${
              new Date(dayObj.date).getMonth() + 1
            }`;
          else dayObj.date = 'Today';
          acc = [...acc, dayObj as unknown as never];
          return acc;
        },
        []
      );

      console.log(this.next16Days);

      clearInterval(weatherChecker);
    }, 10);
  }

  // toggleForecastPeriod(chosen: 'daily' | 'hourly') {}
}
