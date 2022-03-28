import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user!: {
    location: string;
    date: {};
    coords: {
      latitude: number;
      longitude: number;
    };
  };

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

      this.user = { location: '', date: dateComponents, coords: this.coords };
      console.log(this.user);
      clearInterval(resultChecker);
    }, 1000);
  }

  getLocationInfo(coords: { latitude: number; longitude: number }) {
    this.httpService.getLocationInfo(coords).subscribe((info: any) => {
      this.user.location = info.address.state;
      console.log(this.user);
    });
  }

  getWeatherInfo(coords: { latitude: number; longitude: number }) {
    this.httpService.getWeatherInfo(coords).subscribe((info: any) => {
      // this.user.coords = info.address.state;
      console.log(info);
    });
  }
}
