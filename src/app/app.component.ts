import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showContent = false;

  coords!: {
    latitude: number;
    longitude: number;
  };

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((e) => {
      console.log(e);
      this.showContent = true;
      this.coords = {
        longitude: e.coords.longitude,
        latitude: e.coords.latitude,
      };
    });
  }
}
