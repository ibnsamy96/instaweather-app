import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  api = `https://api.openweathermap.org/data/2.5/weather?`;
  cityApi = `https://us1.locationiq.com/v1/reverse.php?key=${environment.LOCATION_API_KEY}`;

  constructor(private http: HttpClient) {}

  getWeatherInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(
      this.api +
        `lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${environment.API_KEY}`
    );
  }

  getLocationInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(
      this.cityApi +
        `&lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    );
  }
}
