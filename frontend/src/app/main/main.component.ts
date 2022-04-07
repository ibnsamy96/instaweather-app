import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() selectedType: string = '';
  @Output() apiDataFetched = new EventEmitter<{
    weather?: boolean;
    location?: boolean;
  }>();

  user!: {
    location: string;
    date: {};
    coords: {
      latitude: number;
      longitude: number;
    };
  };

  weather: any;

  @Input() coords!: {
    latitude: number;
    longitude: number;
  };

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const resultChecker = setInterval(() => {
      console.log(this.coords);
      if (!this.coords) return;

      const date = new Date();
      const dateComponents = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };

      this.getWeatherInfo(this.coords);
      this.getLocationInfo(this.coords);

      this.user = { location: '', date: date, coords: this.coords };
      console.log(this.user);
      clearInterval(resultChecker);
    }, 1000);
  }

  getLocationInfo(coords: { latitude: number; longitude: number }) {
    this.httpService.getLocationInfo(coords).subscribe({
      next: (info: any) => {
        this.user.location = info.address.state || info.address.city;
        console.log(this.user);

        this.apiDataFetched.emit({ location: true });
      },
      error: (err) => {
        console.log(err);
        this.apiDataFetched.emit({ location: false });
      },
    });
  }

  getWeatherInfo(coords: { latitude: number; longitude: number }) {
    this.httpService.getWeatherInfo(coords).subscribe({
      next: (info: any) => {
        // this.user.coords = info.address.state;
        this.weather = {
          main: info.weather[0].main,
          description: info.weather[0].description,
          temp: info.main.temp,
          temp_max: info.main.temp_max,
          temp_min: info.main.temp_min,
        };
        console.log(info);
        console.log(this.weather);

        this.apiDataFetched.emit({ weather: true });
      },
      error: (err) => {
        console.log(err);
        this.apiDataFetched.emit({ weather: false });
      },
    });
  }
}
