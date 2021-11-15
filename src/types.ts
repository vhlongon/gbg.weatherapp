export type Status = "pending" | "idle" | "success" | "error";

export interface ResponseData {
  lat: number;
  lon: number;
  current: Current;
  hourly: ForcastBase[];
}

interface ForcastBase {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
}

interface Current extends ForcastBase {
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
