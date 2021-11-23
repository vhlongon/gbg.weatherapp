import { subDays } from "date-fns";
import { ResponseData } from "./types";

const GBG_COORDS = {
  lat: 57.70887,
  lon: 11.97456,
};
const KEY = import.meta.env.VITE_WEATHER_APP_KEY;
const URL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${GBG_COORDS.lat}&lon=${GBG_COORDS.lon}&units=metric&appid=${KEY}`;

const handleFetch = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.ok
    ? response.json()
    : Promise.reject({
        status: response.status,
        message: response.statusText,
      });
};

export const fetchWeatherData = async (): Promise<ResponseData[]> => {
  const today = new Date();
  const days = Array.from({ length: 5 }, (_, index) =>
    Math.floor(subDays(today, index).getTime() / 1000)
  );

  return await Promise.all(
    days.map((d) => handleFetch<ResponseData>(`${URL}&dt=${d}`))
  );
};
