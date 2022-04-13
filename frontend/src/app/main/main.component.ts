import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from './response.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() selectedType: string = '';
  @Output() apiDataFetched = new EventEmitter<boolean>();

  weatherInfo!: Response;

  // user!: {
  //   location: string;
  //   date: {};
  //   coords: {
  //     latitude: number;
  //     longitude: number;
  //   };
  // };

  // weather: any;

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
      // this.getLocationInfo(this.coords);

      // this.user = { location: '', date: date, coords: this.coords };
      // console.log(this.user);
      clearInterval(resultChecker);
    }, 1000);
  }

  getWeatherInfo(coords: { latitude: number; longitude: number }) {
    this.httpService.getInfo<Response>(coords).subscribe({
      next: (info) => {
        this.weatherInfo = info;
        this.apiDataFetched.emit(true);
      },
      error: (err) => {
        console.log(err);
        this.apiDataFetched.emit(false);
      },
    });
  }

  // getLocationInfo(coords: { latitude: number; longitude: number }) {
  //   this.httpService.getLocationInfo(coords).subscribe({
  //     next: (info: any) => {
  //       this.user.location = info.address.state || info.address.city;
  //       console.log(this.user);

  //       this.apiDataFetched.emit({ location: true });
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.apiDataFetched.emit({ location: false });
  //     },
  //   });
  // }

  // getXWeatherInfo(coords: { latitude: number; longitude: number }) {
  //   this.httpService.getWeatherInfo(coords).subscribe({
  //     next: (info: any) => {
  //       // this.user.coords = info.address.state;
  //       this.weather = {
  //         main: info.weather[0].main,
  //         description: info.weather[0].description,
  //         icon: info.weather[0].icon,
  //         temp: info.main.temp,
  //         temp_max: info.main.temp_max,
  //         temp_min: info.main.temp_min,
  //       };
  //       console.log(info);
  //       console.log(this.weather);

  //       this.apiDataFetched.emit({ weather: true });
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.apiDataFetched.emit({ weather: false });
  //     },
  //   });
  // }
}
