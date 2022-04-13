interface Date {
  minutes?: string;
  hours?: string;
  day: string;
  month: string;
  year: string;
}

interface Location {
  longitude: number;
  latitude: number;
  city: string;
  region: string;
  country: string;
}

interface CurrentWeather {
  date: Date;
  icon: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  state_text: string;
  state_description: string;
}

interface HourWeather {
  hour: string;
  icon: string;
  temp: number;
}

interface ForecastedDayWeather {
  date: Date;
  icon: string;
  temp: number;
  state_text: string;
  hours: HourWeather[];
}

export interface Response {
  location: Location;
  current: CurrentWeather;
  forecast: ForecastedDayWeather[];
}
