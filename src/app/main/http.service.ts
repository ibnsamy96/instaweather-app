import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  api = `https://api.darksky.net/forecast/${environment.API_KEY}`;
  cityApi = `https://us1.locationiq.com/v1/reverse.php?key=${environment.LOCATION_API_KEY}`;

  constructor(private http: HttpClient) {}

  getWeatherInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(this.api + `/${coords.latitude},${coords.longitude}`);
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
