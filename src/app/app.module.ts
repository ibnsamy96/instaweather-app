import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NotationSelectorComponent } from './header/notation-selector/notation-selector.component';
import { TodayComponent } from './main/today/today.component';
import { ForecastComponent } from './main/forecast/forecast.component';
import { CurrentWeatherIconComponent } from './main/shared/current-weather-icon/current-weather-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NotationSelectorComponent,
    TodayComponent,
    ForecastComponent,
    CurrentWeatherIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
