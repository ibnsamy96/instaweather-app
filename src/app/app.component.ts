import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLocationPermissionEnabled = false;
  isApiDataFetched: { weather?: boolean; location?: boolean } = {};

  selectedType = 'C';

  coords!: {
    latitude: number;
    longitude: number;
  };

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((e) => {
      console.log(e);
      this.isLocationPermissionEnabled = true;
      this.coords = {
        longitude: e.coords.longitude,
        latitude: e.coords.latitude,
      };
    });
  }

  updateUI(type: string) {
    console.log(type);

    this.selectedType = type;
  }

  apiDataFetched(isApiDataFetched: any) {
    this.isApiDataFetched.location =
      this.isApiDataFetched.location ?? isApiDataFetched.location;
    this.isApiDataFetched.weather =
      this.isApiDataFetched.weather ?? isApiDataFetched.weather;

    console.log(this.isApiDataFetched);
  }
}
