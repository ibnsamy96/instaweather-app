interface Location {
  longitude: number;
  latitude: number;
  city: string;
  region: string;
  country: string;
}

interface CurrentWeather {
  date: string;
  icon: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  state_text: string;
  state_description: string;
}

export interface HourWeather {
  hour: string;
  icon: string;
  temp: number;
}

interface HourlyForecast {
  date: string;
  hours: HourWeather[];
}

export interface DayWeather {
  date: string;
  icon: string;
  temp: number;
  state_text: string;
}

export interface Response {
  location: Location;
  current: CurrentWeather;
  hourly_forecast: HourlyForecast[];
  daily_forecast: DayWeather[];
}
