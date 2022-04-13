import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

declare var process: any;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUri = environment.ApiUri;

  // privateKeys!: { weather: string; location: string };

  // if( (environment).hasOwnProperty('LOCATION_API_KEY') ) {
  // privateKeys = {
  //   weather: environment.API_KEY,
  //   location: environment.LOCATION_API_KEY,
  // };
  // };

  constructor(private http: HttpClient) {}

  getInfo<T>(coords: { latitude: number; longitude: number }): Observable<T> {
    return this.http.get<T>(
      this.apiUri + `lat=${coords.latitude}&lon=${coords.longitude}`
    );
  }

  // getLocationInfo(coords: {
  //   latitude: number;
  //   longitude: number;
  // }): Observable<unknown> {
  //   return this.http.get(
  //     this.locationApi +
  //       `lat=${coords.latitude}&lon=${coords.longitude}&format=json&normalizeaddress=1&normalizecity=1&key=${this.privateKeys.location}`
  //   );
  // }
}
