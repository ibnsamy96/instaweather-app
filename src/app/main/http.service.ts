import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

declare var process: any;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  weatherApi = `https://api.openweathermap.org/data/2.5/weather?`;
  locationApi = `https://us1.locationiq.com/v1/reverse.php?`;

  privateKeys = {
    weather: environment.API_KEY ?? process.env['API_KEY'],
    location: environment.LOCATION_API_KEY ?? process.env['LOCATION_API_KEY'],
  };

  constructor(private http: HttpClient) {}

  getWeatherInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(
      this.weatherApi +
        `lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${this.privateKeys.weather}`
    );
  }

  getLocationInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(
      this.locationApi +
        `lat=${coords.latitude}&lon=${coords.longitude}&format=json&key=${this.privateKeys.location}`
    );
  }
}
