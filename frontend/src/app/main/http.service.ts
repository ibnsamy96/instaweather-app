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

  // privateKeys!: { weather: string; location: string };

  // if( (environment).hasOwnProperty('LOCATION_API_KEY') ) {
  privateKeys = {
    weather: environment.API_KEY,
    location: environment.LOCATION_API_KEY,
  };
  // };

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
        `lat=${coords.latitude}&lon=${coords.longitude}&format=json&normalizeaddress=1&normalizecity=1&key=${this.privateKeys.location}`
    );
  }
}
