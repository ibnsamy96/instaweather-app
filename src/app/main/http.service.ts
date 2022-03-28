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

  constructor(private http: HttpClient) {}

  getWeatherInfo(coords: {
    latitude: number;
    longitude: number;
  }): Observable<unknown> {
    return this.http.get(this.api + `/${coords.latitude},${coords.longitude}`);
  }
}
